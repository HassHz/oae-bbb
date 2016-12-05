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

var util = require('util');

var AuthzUtil = require('oae-authz/lib/util');

/**
 * A model object that represents a meeting object.
 *
 * @param  {Tenant}         tenant          The tenant to which this meeting is associated
 * @param  {String}         id              The id of the meeting
 * @param  {String}         createdBy       The id of the user who created the meeting
 * @param  {String}         displayName     The display name of the meeting
 * @param  {String}         description     A longer description of the meeting
 * @param  {String}         record    	    Flag indicating that the meeting may be recorded
 * @param  {String}         allModerators   Flag indicating that all users join as moderators
 * @param  {String}         waitModerator   Flag indicating that viewers must wait until a moderator joins
 * @param  {String}         visibility      The visibility of the meeting. Should be one of public, private, loggedin
 * @param  {Number}         created         The timestamp (millis since epoch) at which the meeting was created
 * @param  {Number}         lastModified    The timestamp (millis since epoch) at which the meeting was last modified (or received the last message)
 * @return {Meeting}                        The meeting with the data provided
 */
var Meeting = module.exports.Meeting = function(tenant, id, createdBy, displayName, description, record, allModerators, waitModerator, visibility, created, lastModified) {
    var resourceId = AuthzUtil.getResourceFromId(id).resourceId;
    var that = {};
    that.tenant = tenant;
    that.id = id;
    that.createdBy = createdBy;
    that.displayName = displayName;
    that.description = description;
    that.record = record;
    that.allModerators = allModerators;
    that.waitModerator = waitModerator;
    that.visibility = visibility;
    that.created = created;
    that.lastModified = lastModified;
    that.profilePath = util.format('/meeting/%s/%s', tenant.alias, resourceId);
    that.resourceType = 'meeting';
    return that;
};

/**
 * A model object that represents a meetup object.
 *
 * @param  {Tenant}         tenant          The tenant to which this meetup is associated
 * @param  {String}         id              The id of the meetup
 * @param  {String}         createdBy       The id of the user who created the meetup
 * @param  {String}         displayName     The display name of the meetup
 * @param  {String}         record    	    Flag indicating that the meetup may be recorded
 * @param  {Number}         created         The timestamp (millis since epoch) at which the meetup was created
 * @return {Meetup}                        The meetup with the data provided
 */
var Meetup = module.exports.Meetup = function(tenant, id, createdBy, displayName, record, created) {
    var that = {};
    that.tenant = tenant;
    that.id = id;
    that.createdBy = createdBy;
    that.displayName = displayName;
    that.record = record;
    that.created = created;
    that.resourceType = 'meetup';
    return that;
}

/**
 * A model object that represents a recording object.
 *
 * @param  {String}         id              The id of the recording
 * @param  {String}         contentID       The id of the content resource
 * @param  {String}         createdBy       The id of the user who created the recording
 * @param  {String}         displayName     The display name of the recording
 * @param  {Number}         created         The timestamp (millis since epoch) at which the recording was created
 * @return {Recording}                        The recording with the data provided
 */
var Recording = module.exports.Recording = function(id, contentID, createdBy, created) {
    var that = {};
    that.id = id;
    that.contentID = contentID;
    that.createdBy = createdBy;
    that.created = created;
    that.resourceType = 'recording';
    return that;
}