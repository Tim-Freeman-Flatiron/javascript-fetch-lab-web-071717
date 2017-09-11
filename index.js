function getIssues() {
	fetch('https://api.github.com/repos/dtfreemn/javascript-fetch-lab/issues',{
  	headers: { Authorization: `token ${getToken()}`},
	}).then(function(response) {return response.json()})
		.then(function(json) { showIssues(json)})
}

function showIssues(json) {
	let list = document.getElementById('issues')
	json.forEach(function(issue) {
		let div = `<div>${issue.body}</div>`
		list.innerHTML += div
	})
}

function createIssue() {
	let issueTitle = document.getElementById('title').value
	let issueBody = document.getElementById('body').value
	fetch('https://api.github.com/repos/dtfreemn/javascript-fetch-lab/issues',{
		method: 'post',
  	headers: { Authorization: `token ${getToken()}`},
  	body: JSON.stringify({title: issueTitle, body: issueBody})
	}).then(function(response) {return response.json()})
		.then(function(json) { getIssues(json)})
}

function showResults(json) {
	let url = json.html_url
	let div = `<a href="${url}" target="_blank">${url}</a>`
	document.getElementById('results').innerHTML = div
}

function forkRepo() {
  const repo = 'https://api.github.com/repos/learn-co-curriculum/javascript-fetch-lab/forks'
  fetch(repo, {
  	method: 'post',
  	headers: { Authorization: `token ${getToken()}`}
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
