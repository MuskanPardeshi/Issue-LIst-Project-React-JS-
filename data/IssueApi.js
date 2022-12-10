import axios from 'axios';

// Promise approach 
export default class IssueApi {
	static getAllIssues(cb) {
		axios.get('http://localhost:3001/issues')
			.then(response => cb(response.data))
			.catch(error => { throw error });
	}
	static saveIssue(issue) {
		return new Promise(async (resolve, reject) => { // Asynchronous function USING ES2017 async/await
			try {
				const response = await axios.post('http://localhost:3001/issues', issue);
				resolve(response.data);
			} catch(error) {
				reject(error);
			}
		});
	}
}
