

import rateLimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await rateLimit.limit(req.ip);
    console.log("URL = " , process.env.UPSTASH_REDIS_REST_URL)
    if (!success) {
      return res.status(429).json({
        success: false,
        message: "Too many requests, please try again later",
      });
    }

    next(); 
  } catch (error) {
    console.error("Rate limit error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export default rateLimiter;
