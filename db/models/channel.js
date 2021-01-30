const { Model } = require('objection');

class Channel extends Model {
  static get tableName() {
    return 'channel';
  }

  static get relationMappings() {
    const Video = require('./channel');
    return {
      videos: {
        relation: Model.HasManyRelation,
        modelClass: Video,
        join: {
          from: 'channel.id',
          to: 'video.channel',
        },
      },
    };
  }
}

module.exports = Channel;
