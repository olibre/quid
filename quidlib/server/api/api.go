package api

import (
	emolib "github.com/synw/quid/quidlib/emo"
)

var emo = emolib.Zone{
	Name:    "api",
	NoPrint: true,
}

// Init : init the db conf
func Init(isVerbose bool) {
	emo.NoPrint = !isVerbose
}
