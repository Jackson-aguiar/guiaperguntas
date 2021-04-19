module.exports = (sequelize, DataTypes) => {
    const Answer = sequelize.define('answer', {
        questionId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
        answer: DataTypes.TEXT,
    });

    return Answer;
}