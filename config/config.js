/*!
 * Copyright 2014 Apereo Foundation (AF) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://opensource.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

var Fields = require('oae-config/lib/fields');

module.exports = {
    'title': 'OAE BigBlueButton Module',
    'bbb': {
        'name': 'BigBlueButton Configuration',
        'description': 'Configuration for BigBlueButton conferencing',
        'elements': {
            'enabled': new Fields.Bool('Enabled', 'Enable conferencing with BigBlueButton', false, {'suppress': true}),
            'url': new Fields.Text('URL', 'The URL of your BigBlueButton server \n(e.g., http://test-install.blindsidenetworks.com/bigbluebutton/)', 'http://test-install.blindsidenetworks.com/bigbluebutton/', {'suppress': true}),
            'secret': new Fields.Text('Secret', 'Your BigBlueButton shared secret \n(e.g. 8cd8ef52e8e101574e400365b55e11a6)', '8cd8ef52e8e101574e400365b55e11a6', {'suppress': true})
        }
    }
};
