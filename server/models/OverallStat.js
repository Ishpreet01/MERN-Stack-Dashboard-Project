import mongoose from "mongoose";

const OverallStatSchema = new mongoose.Schema(
    {
        totalCustomers:Number,
        yearlySalesTotal:Number,
        yearlyTotalSoldUnits: Number,
        year:Number,
        monthlyData: [   //this is an array designed to store monthly data where  each element corresponds to a specific month
            {
                month: String,
                totalSales:Number,
                totalUnits:Number
            },
        ],
        dailyData: [
            {    //this is an object that holds data related to a specific day
            date: String,
            totalSales: Number,
            totalUnits: Number
            },
        ],
        salesByCategory:{
            type: Map,
            of:Number,
        },
    },
    
    {timestamps:true}
);

const OverallStat=mongoose.model("OverallStat",OverallStatSchema);
export default OverallStat; 