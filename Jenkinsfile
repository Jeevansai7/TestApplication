pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {
        stage('install') {
            steps {
                sh 'npm i fsevents@latest -f --save-optional'
                sh 'npm install --no-optional'
            }
        }
        stage('test') {
            steps {
                sh "npm run test"
            }
        }
         stage('build') {
            steps {
                sh "CI=false npm run build"
            }
        }
    }
}
