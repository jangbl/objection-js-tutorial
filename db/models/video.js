const { Model } = require('objection');

class Video extends Model {
  static get tableName() {
    return 'video';
  }

  static get relationMappings() {
    const Channel = require('./channel');
    return {
      channel: {
        relation: Model.BelongsToOneRelation,
        modelClass: Channel,
        join: {
          from: 'video.channel',
          to: 'channel.id',
        },
      },
    };
  }
}

module.exports = Video;
