const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'user';
  }

  static get relationMappings() {
    const Channel = require('./channel');
    return {
      channel: {
        relation: Model.BelongsToOneRelation,
        modelClass: Channel,
        join: {
          from: 'user.channelId',
          to: 'channel.id',
        },
      },
    };
  }
}

module.exports = User;
