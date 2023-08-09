const User = require('./User');
const Story = require('./Story');
const Branch = require('./Branch')
const StoryChoice = require('./StoryChoice')





User.hasMany(Story);
Story.belongsTo(User, {
    foreignKey: 'user_id',
});
Story.hasMany(Branch)

User.hasMany(Branch);
Branch.belongsTo(User, {
    foreignKey: 'user_id',
});
Branch.hasMany(StoryChoice);
Branch.hasOne(Story)

User.hasMany(StoryChoice);
StoryChoice.belongsTo(User, {
    foreignKey: 'user_id',
});
StoryChoice.hasOne(Branch);







module.exports = {
  User,
  Story,
  Branch,
  StoryChoice
};

const db = {

  createStory: async (story) => {
    return await Story.create(story)
    .catch((err) => {
      console.log(err)
      return err
    })
  },

  createUser: async (user) => {
    console.log(user)
    return await User.create(user)
    .catch((err) => {
      console.log(err)
      return err
    })
  },



  getStory: async (id) => {
    return await Story.findByPk(id, {
      include: [
        { model: User, 
          attributes: ["id", "author_name"], 
          as: "user" },
      ]
    })
    .catch((err) => {
      return err
    });
  },

   getBranch: async (id) => {
    return await Branch.findByPk(id, {
      include: [
        { model: User, attributes: ["id", "author_name"], as: "user" },
        {
          model: Story,
          include: [{ 
            model: User, 
            attributes: ["id", "author_name"], 
            as: "user" 
            },
          ]
        },
      ],
    })
    .catch((err) => {
      return err
    });
  },

  getUser: async (id) => {
    return await User.scope('withoutPassword').findByPk(id, {
      include: [{ model: Branch }, { model: Comment }],
    })
    .catch((err) => {
      return err
    });
  },

  createBranch: async (sessionUserId, branch) => {
    branch.user_id = sessionUserId
    console.log(branch)
    return await Branch.create(branch)
    .catch((err) => {
      console.log(err)
      return err
    })
    
  },


  updateBranch: async (sessionUserId, branchID, branch) => {
    console.log(sessionUserId, branch)
    return await Branch.update(branch, { 
      where: { 
        id: branchID, 
        user_id: sessionUserId 
      } 
    })
    .catch((err) => {
      return err 
    });
  },

  updateUser: async (sessionUserId, userId, info) => {
    return await User.update(info, { 
      where: { 
        id: userId && sessionUserId 
      }, 
        individualHooks: true 
      })
    .catch((err) => {
      return false 
    });
  },


  deleteBranch: async (sessionUserId, branchId) => {
    console.log(sessionUserId, branchId)
    return await Branch.destroy({ 
      where: { 
        id: branchId, 
        user_id: sessionUserId 
      } 
    })
    .then((blog) => {
      return true
    })
    .catch((err) => {
      return err 
    });
  },

  deleteStory: async (sessionUserId, storyID) => {
    return await Story.destroy({ 
      where: { 
        id: storyID, 
        user_id: sessionUserId 
      } 
    })
    .then((story) => {
      return true
    })
    .catch((err) => {
      return err 
    });
    
  },

  authUser: async (user) => {
    console.log(user)
    let password = user.password;
    let authUser = await User.findOne({
      where: { email: user.email }
    })
    if (authUser) {
    return authUser.authenticate(password) ? authUser.toJSON() : false;
    } else {
      return false;
    }
  },
}

module.exports = { db, User, Story, Branch, StoryChoice };
