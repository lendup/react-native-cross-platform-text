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
    // TODO: lint report that can be archived?
    if (sh(script: dockerRun("yarn lint"), returnStatus: true) != 0) {
      currentBuild.result = "UNSTABLE"
    }
  }
  stage("test") {
    // TODO: get junit results instead of checking exit status
    if (sh(script: dockerRun("yarn test-ci"), returnStatus: true) != 0) {
      currentBuild.result = "UNSTABLE"
    }
    step([$class: 'CloverPublisher', cloverReportDir: 'coverage/'])
  }

  stage("compile") {
    sh(dockerRun("yarn compile"))
  }

  if (env.BRANCH_NAME == "master" || env.BRANCH_NAME =~ /^v(\d)([\d\.])*$/) {
    stage("publish") {
      withCredentials([usernameCredentials(id: "http://lendup-jenkins_npmjs.com/", prefix: "NPM")]) {
        sh '''
          docker run \
            --rm \
            -i \
            -e NPM_USERNAME \
            -e NPM_PASSWORD \
            -e NPM_EMAIL="$NPM_USERNAME@lendup.com" \
            -v $(pwd):/usr/src/app \
            docker.gameofloans.com/nodejs/publisher
        '''
      }
    }
  }
}
