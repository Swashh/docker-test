import { defineConfig } from 'cypress';
import { compare } from 'odiff-bin';
import path = require('path');
import os = require('os');
/**
 * @type {Cypress.PluginConfig}
 */

const osName = os.platform()

export default defineConfig({
  trashAssetsBeforeRuns: false, 

  e2e: {
    setupNodeEvents (on, config) {
      const absoluteFilePath = 'smile.png';

      on('task', {
        async compare({ filename, options }) {
          const baseImage = absoluteFilePath; 

          const baseFolder = 'images'
          // const baseImage = path.join(baseFolder, osName, path.basename(filename))
          
          const newImage = filename
          const diffImage = 'diff.png'
          console.log(
            'comparing base image %s to the new image %s',
            baseImage,
            newImage,
          )
          if (options) {
            console.log('odiff options %o', options)
          }
          const started = +new Date()
    
          const result = await compare(baseImage, newImage, diffImage, options)
          const finished = +new Date()
          const elapsed = finished - started
          console.log('odiff took %dms', elapsed)
    
          console.log(result)
          return result
        },
      })
    },
    baseUrl: 'http://the-internet.herokuapp.com/',
  },
});

