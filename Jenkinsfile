pipeline {
    agent {
        docker { image 'node:22.13.1-alpine3.21' }
        }
    stages {
        stage('install') {
            steps {
                sh 'npm i fsevents@latest -f --save-optional'
                sh 'npm install --no-optional'
            }
        }
        stage('build') {
            steps {
                sh "npm run build"
            }
        }
        stage('test') {
            steps {
                sh "npm run test"
            }
        }
    }
}
