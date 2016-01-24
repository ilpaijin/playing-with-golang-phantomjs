#commands
exec { "apt-get update -y && apt-get install -y git":
  path => "/usr/bin",
}

# exec { "mkdir /goroot && curl https://storage.googleapis.com/golang/go1.3.1.linux-amd64.tar.gz | tar xvzf - -C /goroot --strip-components=1":
#   path => "/usr/bin",
# }

# exec { "mkdir /home/vagrant/go":
#   path => "/usr/bin",
# }

# exec { "apt-get update -y && apt-get install --no-install-recommends -y -q libwebkit2gtk-3.0-dev libgtk-3-dev libcairo2-dev libglib2.0-dev":
#   path => "/usr/bin",
# }

# exec { "apt-get install gccgo-go":
#   path => "/usr/bin",
# }

# exec { "go get -u -tags gtk_3_10 github.com/sourcegraph/webloop/...":
#   path => "/usr/bin",
# }

# Packages
# package { "apache2":
#   ensure  => present,
#   require => Exec["apt-get update"],
# }

# package { 'php5':
#   require => Exec['apt-get update'],
#   ensure => installed,
# }

# Services
# service { "apache2":
#   ensure  => "running",
#   require => Package["apache2"],
# }

file { "/Users/paolo/Sources/go/src/github.com/ilpaijin/tt/":
  ensure  => "link",
  target  => "/gopath/src/github.com/ilpaijin/tt/",
  # require => Package["apache2"],
  # notify  => Service["apache2"],
}
