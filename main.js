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