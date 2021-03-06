package db

import (
	"database/sql"

	// pg import
	_ "github.com/lib/pq"

	"github.com/synw/quid/quidlib/crypt"
	"github.com/synw/quid/quidlib/server"
)

// SelectAllNamespaces : get the namespaces
func SelectAllNamespaces() ([]server.Namespace, error) {
	data := []namespace{}
	res := []server.Namespace{}
	err := db.Select(&data, "SELECT id,name,max_token_ttl,max_refresh_token_ttl,public_endpoint_enabled FROM namespace ORDER BY name")
	if err != nil {
		return res, err
	}
	for _, u := range data {
		res = append(res, server.Namespace{
			ID:                    u.ID,
			Name:                  u.Name,
			MaxTokenTTL:           u.MaxTokenTTL,
			MaxRefreshTokenTTL:    u.MaxRefreshTokenTTL,
			PublicEndpointEnabled: u.PublicEndpointEnabled,
		})
	}
	return res, nil
}

// SelectNamespaceStartsWith : get a namespace
func SelectNamespaceStartsWith(name string) ([]server.Namespace, error) {
	data := []namespace{}
	res := []server.Namespace{}
	err := db.Select(&data, "SELECT id,name FROM namespace WHERE name LIKE '"+name+"%'")
	if err != nil {
		return res, err
	}
	for _, u := range data {
		res = append(res, server.Namespace{
			ID:   u.ID,
			Name: u.Name,
		})
	}
	return res, nil
}

// SelectNamespaceFromName : get a namespace
func SelectNamespaceFromName(name string) (bool, server.Namespace, error) {
	data := namespace{}
	ns := server.Namespace{}
	q := "SELECT id,name,key,refresh_key,max_token_ttl,max_refresh_token_ttl,public_endpoint_enabled FROM namespace WHERE name=$1"
	emo.Query(q, name)
	row := db.QueryRowx(q, name)
	err := row.StructScan(&data)
	if err != nil {
		if err == sql.ErrNoRows {
			return false, ns, err
		}
		return true, ns, err
	}
	k, err := crypt.AesGcmDecrypt(data.Key, nil)
	if err != nil {
		emo.DecryptError(err)
		return true, ns, err
	}
	rk, err := crypt.AesGcmDecrypt(data.RefreshKey, nil)
	if err != nil {
		emo.DecryptError(err)
		return true, ns, err
	}
	ns.ID = data.ID
	ns.Name = data.Name
	ns.Key = k
	ns.RefreshKey = rk
	ns.MaxTokenTTL = data.MaxTokenTTL
	ns.MaxRefreshTokenTTL = data.MaxRefreshTokenTTL
	ns.PublicEndpointEnabled = data.PublicEndpointEnabled
	return true, ns, nil
}

// SelectNamespaceKey : get the key for a namespace
func SelectNamespaceKey(ID int64) (bool, string, error) {
	data := namespace{}
	var key string
	row := db.QueryRowx("SELECT key FROM namespace WHERE id=$1", ID)
	err := row.StructScan(&data)
	if err != nil {
		if err == sql.ErrNoRows {
			return false, key, nil
		}
		return false, key, err
	}
	//emo.Decrypt("Decrypting key data for the namespace id " + strconv.FormatInt(ID, 10))
	k, err := crypt.AesGcmDecrypt(data.Key, nil)
	if err != nil {
		emo.DecryptError(err)
		return true, "", err
	}
	return true, k, nil
}

/*
// SelectNamespaceKeys : get the refresh key for a namespace
func SelectNamespaceKeys(name string) (bool, string, string, error) {
	data := namespace{}
	row := db.QueryRowx("SELECT key,refresh_key FROM namespace WHERE name=$1", name)
	err := row.StructScan(&data)
	if err != nil {
		if err == sql.ErrNoRows {
			return false, "", "", nil
		}
		return false, "", "", err
	}
	//emo.Decrypt("Decrypting refresh key data for the namespace id " + strconv.FormatInt(ID, 10))
	rk, err := aesGcmDecrypt(data.RefreshKey, nil)
	if err != nil {
		emo.DecryptError(err)
		return true, "", "", err
	}
	k, err := aesGcmDecrypt(data.Key, nil)
	if err != nil {
		emo.DecryptError(err)
		return true, "", "", err
	}

	return true, rk, k, nil
}*/

// SelectNamespaceID : get a namespace
func SelectNamespaceID(name string) (int64, error) {
	data := []namespace{}
	err := db.Select(&data, "SELECT id,name FROM namespace WHERE name=$1", name)
	if err != nil {
		return 0, err
	}
	return data[0].ID, nil
}

// SetNamespaceEndpointAvailability : enable or disable public endpoint
func SetNamespaceEndpointAvailability(ID int64, enable bool) error {
	q := "UPDATE namespace SET public_endpoint_enabled=$2 WHERE id=$1"
	_, err := db.Query(q, ID, enable)
	if err != nil {
		return err
	}
	return nil
}

// CreateNamespace : create a namespace
func CreateNamespace(name, key, refreshKey, ttl, refreshTTL string, endpoint bool) (int64, error) {
	k, err := crypt.AesGcmEncrypt(key, nil)
	if err != nil {
		return 0, err
	}
	rk, err := crypt.AesGcmEncrypt(refreshKey, nil)
	if err != nil {
		return 0, err
	}
	q := "INSERT INTO namespace(name,key,refresh_key,max_token_ttl,max_refresh_token_ttl,public_endpoint_enabled) VALUES($1,$2,$3,$4,$5,$6) RETURNING id"
	rows, err := db.Query(q, name, k, rk, ttl, refreshTTL, endpoint)
	if err != nil {
		return 0, err
	}
	var id int64
	for rows.Next() {
		var idi interface{}
		err := rows.Scan(&idi)
		if err != nil {
			emo.QueryError(err)
			return 0, err
		}
		id = idi.(int64)
	}
	return id, nil
}

// UpdateNamespaceTokenMaxTTL : update a max access token ttl for a namespace
func UpdateNamespaceTokenMaxTTL(ID int64, maxTTL string) error {
	q := "UPDATE namespace set max_token_ttl=$2 WHERE id=$1"
	_, err := db.Query(q, ID, maxTTL)
	if err != nil {
		return err
	}
	return nil
}

// UpdateNamespaceRefreshTokenMaxTTL : update a max refresh token ttl for a namespace
func UpdateNamespaceRefreshTokenMaxTTL(ID int64, refreshMaxTTL string) error {
	q := "UPDATE namespace set max_refresh_token_ttl=$2 WHERE id=$1"
	_, err := db.Query(q, ID, refreshMaxTTL)
	if err != nil {
		return err
	}
	return nil
}

// DeleteNamespace : delete a namespace
func DeleteNamespace(ID int64) QueryResult {
	q := "DELETE FROM namespace where id=$1"
	tx, err := db.Begin()
	_, err = tx.Exec(q, ID)
	if err != nil {
		return queryError(err)
	}
	err = tx.Commit()
	if err != nil {
		return queryError(err)
	}
	return queryNoError()
}

// NamespaceExists : check if an namespace exists
func NamespaceExists(name string) (bool, error) {
	q := "SELECT COUNT(id) FROM namespace WHERE(name=$1)"
	var n int
	err := db.Get(&n, q, name)
	if err != nil {
		return false, err
	}
	exists := false
	if n == 1 {
		exists = true
	}
	return exists, nil
}

// CountUsersForNamespace : count users in a namespace
func CountUsersForNamespace(ID int64) (int, error) {
	q := "SELECT COUNT(id) FROM usertable WHERE(namespace_id=$1)"
	var n int
	err := db.Get(&n, q, ID)
	if err != nil {
		return n, err
	}
	return n, nil
}
