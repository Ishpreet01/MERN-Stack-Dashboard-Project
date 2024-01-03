import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
    {
        productId:String,
        yearlySalesTotal:Number,
        yearlyTotalSoldUnits: Number,
        year: Number,
        monthlyData: [   //this is an array designed to store monthly data where  each element corresponds to a specific month
            {
                month: String,
                totalSales:Number,
                totalUnits:Number
            }
        ],
        dailyData: {    //this is an object that holds data related to a specific day
            date: String,
            totalSales: Number,
            totalUnits: Number
            },
    },
    
    {timestamps:true}
);

const ProductStat=mongoose.model("ProductStat",ProductStatSchema);
export default ProductStat; 