import * as chai from 'chai';
import 'mocha';
import * as dotenv from 'dotenv';
import { PostService } from '../../src/services/post.service'


dotenv.config();
describe('Post service', function() {

  before('env value exist "API_URL"',function() {
    chai.expect(process.env.API_URL).to.not.undefined
  });
  before('env value exist "API_TOKEN"',function() {
    chai.expect(process.env.API_TOKEN).to.not.undefined
  });
  before('Init Post service',function() {
    this.service = new PostService()
  });

  it('should return query ', function() {
    chai.expect(this.service.getQuery()).to.have.property('query')
  });
  it('should return edges array ', async function() {
    const req = {
      start: new Date(Date.now() - ( 3600 * 1000 * 24)),
      end: new Date()
    }
    const posts = await this.service.getPosts(req)
    chai.expect(posts.data.posts).to.have.property('edges')
    chai.expect(posts.data.posts.edges).to.be.an('array')
  });
});