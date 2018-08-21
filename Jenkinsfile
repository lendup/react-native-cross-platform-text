def dockerRun(String cmd) {
  return '''docker run \
    --rm \
    -i \
    -v $(pwd):/usr/src/app \
    --workdir=/usr/src/app \
    docker.gameofloans.com/node:9.4.0 \
      ''' + cmd
}

builderNode {
  checkout scm
  stage("install dependencies") {
    sh(dockerRun("yarn install"))
  }
  stage("lint") {
    if (sh(script: dockerRun("yarn lint"), returnStatus: true) != 0) {
      currentBuild.result = "UNSTABLE"
    }
  }
  stage("test") {
    if (sh(script: dockerRun("yarn test-ci"), returnStatus: true) != 0) {
      currentBuild.result = "UNSTABLE"
    }
    step([$class: 'CloverPublisher', cloverReportDir: 'coverage/'])
  }
}
