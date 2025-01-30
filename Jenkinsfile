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
