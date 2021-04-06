import * as chai from 'chai';
import 'mocha';
import * as dotenv from 'dotenv';
import { CollectionService } from '../../src/services/collection.service'


dotenv.config();
describe('Collection service', function() {

  before('env value exist "API_URL"',function() {
    chai.expect(process.env.API_URL).to.not.undefined
  });
  before('env value exist "API_TOKEN"',function() {
    chai.expect(process.env.API_TOKEN).to.not.undefined
  });
  before('Init Collection service',function() {
    this.collectionService = new CollectionService()
  });

  it('should return query ', function() {
    chai.expect(this.collectionService.getQuery()).to.have.property('query')
  });
  it('should return edges array ', async function() {

    const collections = await this.collectionService.getCollections()
    chai.expect(collections.data.collections).to.have.property('edges')
    chai.expect(collections.data.collections.edges).to.be.an('array')
  });
});