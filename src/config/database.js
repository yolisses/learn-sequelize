// postgres://bqknnzjq:649AvYQoR25Yb3QnBP9VNugGsFnF5rlU@tuffi.db.elephantsql.com/bqknnzjq

postgres: module.exports = {
	username: 'bqknnzjq',
	password: '649AvYQoR25Yb3QnBP9VNugGsFnF5rlU',
	database: 'bqknnzjq', // to be created by sequelize
	host: 'tuffi.db.elephantsql.com',
	ssl: true,
	dialect: 'postgres',
	define: {
		timeStamps: true,
		underscored: true,
	},
};
