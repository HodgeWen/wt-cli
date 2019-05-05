#!/usr/bin/env node

const inquirer = require('inquirer')
const yargs = require('yargs')
const { argv } = yargs
const packageCong = require('../package.json')
console.log(packageCong)
// inquirer
//   .prompt([
//     {
//       type: 'list',
//       name: 'name',
//       message: 'message',
//       default: 'bb',
//       choices: ['aa', 'bb', 'cc']
//     }
//   ])
//   .then(answers => {
//     console.log(answers)
//   })
