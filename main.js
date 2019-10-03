document.getElementById('issueInputForm').addEventListener('submit', saveIssue)

function saveIssue(event) {
    let issueDesc = document.getElementById('issueDescriptionInput').value
    let issueSeverity = document.getElementById('issueSeverityInput').value
    let issueAssignedTo = document.getElementById('issueAssignedToInput').value
    let issueId = chance.guid()
    let issueStatus = "Open"

    let issue = {
        id: issueId,
        description: issueDesc,
        severity: issueSeverity,
        assignedTo: issueAssignedTo,
        status = issueStatus
    }
if (localStorage.getItem('issues') === null) {
    let issues = []
    issues.push(issue)
    localStorage.setItem('issues', JSON.stringify(issues))
} else {
    let issues = JSON.parse(localStorage.getItem('issues'))
    issues.push(issue)
    localStorage.setItem('issues', JSON.stringify(issues))
    }

    document.getElementById('issueInputForm').reset()

    fetchIssues()

    event.preventDefault()
}

function fetchIssues() {
    let issues = JSON.parse(localStorage.getItem('issues'))
    let issuesList = document.getElementById('issuesList')

    issuesList.innerHtml = ''

    for (let i = 0; i < issues.length; i++) {
        let id = issues[i].id
        let description = issues[i].description
        let severity = issues[i].severity
        let assignedTo = issues[i].assignedTo
        let status = issues[i].status

        issuesList.innerHtml += '<div class="well">' + '<h6>Issue ID: ' + id + '</h6>' + 
                                '<p><span class="label label-info">' + status + '</span></p>' + '<h3>' + description + '</h3>' +
                                '<p><span class="glyphicon glyphicon-time"></span>' + severity + '</p>' + 
                                '<p><span class="glyphicon glyphicon-user"></span>' + assignedTo + '</p>' + 
                                '<a href="#" onClick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>' + 
                                '<a href="#" onClick="deleteIssues(\''+id+'\')" class="btn btn-danger">Delete</a>' + 
                                '</div>'

    }
}