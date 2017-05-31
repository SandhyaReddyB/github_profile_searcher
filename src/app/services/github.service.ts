import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id ='7974e156ed84b607f1f4';
    private client_secret = '7e5d9ccdef63a83a705d808d6f1fc767a3d1bcee';

    constructor(private http:Http) {
        console.log ('Github service is ready...');
        this.username = 'SandhyaReddyB';
    }
    getUser() {
        return this.http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(resp => resp.json());
    }
    getRepos() {
        return this.http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(repos => repos.json());
    }
    updateUser(username:string) {
        this.username = username;
    }
}