module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define('question', {
        userId: DataTypes.INTEGER,
        title: DataTypes.STRING,
        description: DataTypes.STRING
    });

    return Question;
}