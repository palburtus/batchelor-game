import axios from 'axios';
import * as contentService from '../services/contentService';

jest.mock('axios');

describe('content parser tests', () => {

    test('parse contestents returns contestant array', () => {

        axios.get.mockResolvedValue({
            data: [
              {
                userId: 1,
                id: 1,
                title: 'My First Album'
              },
              {
                userId: 1,
                id: 2,
                title: 'Album: The Sequel'
              }
            ]
          });
        

        let result = contentService.getContent();

        expect(result).not.toBeNull();

    });

});