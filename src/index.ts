import * as _ from 'lodash';
import { GitHubApiService } from "./GitHubApiService";
import { User } from "./User";
import { Repo } from "./Repo";

var svc = new GitHubApiService();
console.log('Arguments are:' + process.argv);
let username = '';
if(process.argv.length < 3) {
    console.log('Please pass the username as an argument');
} else {
     username = process.argv[2];
}
console.log('Username entered is: ' + username);
svc.getUserInfo(username, (user: User) => {
    svc.getRepos(username, (repos: Repo[]) => {
        let sortedRepos = _.sortBy(repos, [(repo: Repo) => repo.forkCount * -1]);
        let filteredRepos = _.take(sortedRepos, 3);
        user.repos = filteredRepos;
        console.log(user);
    });
});

