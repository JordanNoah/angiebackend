module.exports = (db, DataTypes) => {
    const document = db.define('document',{
        id:{ type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
        uuid: { type: DataTypes.STRING,allowNull:false },
		nameLawyer: { type: DataTypes.STRING,allowNull:true },
	    dniLawyer: { type: DataTypes.STRING,allowNull:true },
	    maritalStatusLawyer: { type: DataTypes.STRING,allowNull:true },
	    professionLawyer: { type: DataTypes.STRING,allowNull:true },
	    buisnessName: { type: DataTypes.STRING,allowNull:true },
	    clientName: { type: DataTypes.STRING,allowNull:true },
	    dniClient: { type: DataTypes.STRING,allowNull:true },
	    numberOperation: { type: DataTypes.STRING,allowNull:true },
	    product: { type: DataTypes.STRING,allowNull:true },
	    warranty: { type: DataTypes.STRING,allowNull:true },
	    grantDate: { type: DataTypes.STRING,allowNull:true },
	    cutDate: { type: DataTypes.STRING,allowNull:true },
	    originalCapital: { type: DataTypes.STRING,allowNull:true },
	    outstandingCapital: { type: DataTypes.STRING,allowNull:true },
	    canceledInstallments: { type: DataTypes.STRING,allowNull:true },
	    canceledValue: { type: DataTypes.STRING,allowNull:true },
	    expiredValue: { type: DataTypes.STRING,allowNull:true },
	    overdueInstallments: { type: DataTypes.STRING,allowNull:true },
	    normalInterest: { type: DataTypes.STRING,allowNull:true },
	    moraInterest: { type: DataTypes.STRING,allowNull:true },
	    pastDueInterestRestructures: { type: DataTypes.STRING,allowNull:true },
	    insuranceDeduction: { type: DataTypes.STRING,allowNull:true },
	    comcobCollectionFee: { type: DataTypes.STRING,allowNull:true },
	    gescobCollectionManagement: { type: DataTypes.STRING,allowNull:true },
	    legalExpenses: { type: DataTypes.STRING,allowNull:true },
	    others: { type: DataTypes.STRING,allowNull:true },
	    total: { type: DataTypes.STRING,allowNull:true },
	    thisOperationWasAwardedTo: { type: DataTypes.STRING,allowNull:true },
	    beingExpiredSince: { type: DataTypes.STRING,allowNull:true },
	    theOverdueInstallmentNumberIs: { type: DataTypes.STRING,allowNull:true },
        urlPath: { type: DataTypes.STRING,allowNull:true }
    })
    return document
}