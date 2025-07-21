
import React from "react";

const AdminChapters: React.FC = () => {

    return (
        <>
            <div 
	style={{
		height: 1400,
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		background: "#FFFFFF",
	}}>
	<div 
		style={{
			alignSelf: "stretch",
			display: "flex",
			alignItems: "center",
			background: "#FFFFFF",
			borderRadius: 9,
			paddingTop: 19,
			paddingBottom: 19,
			paddingLeft: 30,
			paddingRight: 30,
			marginBottom: 74,
			marginLeft: 71,
			marginRight: 71,
			boxShadow: "-6px 9px 30px #99999940",
		}}>
		<img
			src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/e3wi37z5_expires_30_days.png"} 
			style={{
				borderRadius: 9,
				width: 64,
				height: 64,
				marginRight: 6,
				objectFit: "fill",
			}}
		/>
		<div 
			style={{
				flexShrink: 0,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>
			<div 
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 29,
						fontWeight: "bold",
					}} >
					{"Admin Dashboard"}
				</span>
				<span 
					style={{
						color: "#000000",
						fontSize: 16,
					}} >
					{"Manage your educational platform"}
				</span>
			</div>
		</div>
		<div 
			style={{
				flex: 1,
				alignSelf: "stretch",
			}}>
		</div>
		<button 
			style={{
				flexShrink: 0,
				display: "flex",
				alignItems: "center",
				background: "#FFFFFF",
				borderRadius: 6,
				border: `1px solid #00000033`,
				paddingTop: 8,
				paddingBottom: 8,
				paddingLeft: 10,
				paddingRight: 10,
				gap: 38,
				textAlign: "left",
			}}
			onClick={()=>alert("Pressed!")}>
			<img
				src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/tr9pgsju_expires_30_days.png"} 
				style={{
					borderRadius: 6,
					width: 15,
					height: 19,
					objectFit: "fill",
				}}
			/>
			<span 
				style={{
					color: "#000000",
					fontSize: 16,
					fontWeight: "bold",
				}} >
				{"Logout"}
			</span>
		</button>
	</div>
	<div 
		style={{
			alignSelf: "stretch",
			marginBottom: 32,
			marginLeft: 72,
			marginRight: 72,
		}}>
		<div 
			style={{
				alignSelf: "stretch",
				display: "flex",
				alignItems: "flex-start",
				background: "#FFFFFF",
				borderRadius: 7,
				boxShadow: "0px 4px 42px #00000040",
			}}>
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					background: "#FFFFFF",
					paddingTop: 7,
					paddingBottom: 7,
					paddingLeft: 67,
					paddingRight: 67,
					marginRight: 1,
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
					}} >
					{"Overview"}
				</span>
			</div>
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					background: "#FFFFFF",
					paddingTop: 7,
					paddingBottom: 7,
					paddingLeft: 72,
					paddingRight: 72,
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
					}} >
					{"Courses"}
				</span>
			</div>
			<button 
				style={{
					flexShrink: 0,
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					background: "#009905",
					borderRadius: 7,
					border: "none",
					paddingTop: 7,
					paddingBottom: 7,
					paddingLeft: 67,
					paddingRight: 67,
					marginRight: 1,
					textAlign: "left",
				}}
				onClick={()=>alert("Pressed!")}>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 17,
						fontWeight: "bold",
					}} >
					{"Chapters"}
				</span>
			</button>
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					background: "#FFFFFF",
					paddingTop: 7,
					paddingBottom: 7,
					paddingLeft: 64,
					paddingRight: 64,
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
					}} >
					{"Questions"}
				</span>
			</div>
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					background: "#FFFFFF",
					paddingTop: 7,
					paddingBottom: 7,
					paddingLeft: 62,
					paddingRight: 62,
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
					}} >
					{"Blog Posts"}
				</span>
			</div>
		</div>
		<div 
			style={{
				alignSelf: "stretch",
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-end",
			}}>
			<div 
				style={{
					width: 215,
					display: "flex",
					flexDirection: "column",
					background: "#FFFFFF",
					paddingTop: 7,
					paddingBottom: 7,
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
						textAlign: "center",
						marginLeft: 68,
						marginRight: 68,
					}} >
					{"Analytics"}
				</span>
			</div>
		</div>
	</div>
	<span 
		style={{
			color: "#000000",
			fontSize: 27,
			fontWeight: "bold",
			marginBottom: 49,
			marginLeft: 85,
		}} >
		{"Chapter Management"}
	</span>
	<div 
		style={{
			alignSelf: "stretch",
			background: "#FFFFFF",
			borderRadius: 10,
			marginBottom: 22,
			marginLeft: 73,
			marginRight: 73,
			boxShadow: "5px 8px 72px #00000040",
		}}>
		<div 
			style={{
				alignSelf: "stretch",
				alignItems: "flex-start",
				marginLeft: 14,
				position: "relative",
			}}>
			<div 
				style={{
					alignSelf: "stretch",
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					gap: 10,
				}}>
				<span 
					style={{
						color: "#000000",
					}} >
					{"📚Communicative English I & II(10 chapters)"}
				</span>
				<div 
					style={{
						display: "flex",
						alignItems: "flex-start",
						background: "#FFFFFF",
						padding: 10,
						marginLeft: 11,
					}}>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							fontWeight: "bold",
							marginRight: 270,
						}} >
						{"Title"}
					</span>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							fontWeight: "bold",
							marginRight: 467,
						}} >
						{"Description"}
					</span>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							fontWeight: "bold",
							marginTop: 1,
							marginBottom: 1,
							marginRight: 93,
						}} >
						{"Questions"}
					</span>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							fontWeight: "bold",
							marginTop: 1,
							marginBottom: 1,
						}} >
						{"Actions"}
					</span>
				</div>
			</div>
			<div 
				style={{
					position: "absolute",
					bottom: 32,
					right: 0,
					width: 161,
					display: "flex",
					alignItems: "center",
					background: "#009905",
					borderRadius: 5,
					paddingTop: 5,
					paddingBottom: 2,
					paddingLeft: 15,
					paddingRight: 15,
					gap: 18,
				}}>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/1fmsu10x_expires_30_days.png"} 
					style={{
						borderRadius: 5,
						width: 12,
						height: 12,
						objectFit: "fill",
					}}
				/>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 15,
						fontWeight: "bold",
						flex: 1,
					}} >
					{"Add Chapter"}
				</span>
			</div>
		</div>
		<div 
			style={{
				alignSelf: "stretch",
				display: "flex",
				alignItems: "center",
				background: "#FFFFFF",
				paddingTop: 11,
				paddingBottom: 11,
				paddingLeft: 10,
				paddingRight: 10,
				marginLeft: 25,
				marginRight: 25,
			}}>
			<span 
				style={{
					color: "#000000",
					fontSize: 18,
					fontWeight: "bold",
					textAlign: "center",
					flex: 1,
				}} >
				{"Grammar Basics"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 152,
				}} >
				{"Fundamental English grammar rules and structures"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 164,
				}} >
				{"3"}
			</span>
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					alignItems: "flex-start",
					paddingTop: 6,
					paddingBottom: 6,
					gap: 26,
				}}>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/44y50m5s_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/uw0wt6ad_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
			</div>
		</div>
		<div 
			style={{
				alignSelf: "stretch",
				display: "flex",
				alignItems: "center",
				background: "#FFFFFF",
				paddingTop: 11,
				paddingBottom: 11,
				paddingLeft: 10,
				paddingRight: 10,
				marginLeft: 25,
				marginRight: 25,
			}}>
			<span 
				style={{
					color: "#000000",
					fontSize: 18,
					fontWeight: "bold",
					marginRight: 133,
				}} >
				{"Vocabulary Building"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 185,
				}} >
				{"Expand your English vocabulary systematically"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 168,
				}} >
				{"1"}
			</span>
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					alignItems: "flex-start",
					paddingTop: 6,
					paddingBottom: 6,
					gap: 26,
				}}>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/z2o2bz5u_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/m1dx0lkq_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
			</div>
		</div>
		<div 
			style={{
				alignSelf: "stretch",
				display: "flex",
				alignItems: "center",
				background: "#FFFFFF",
				paddingTop: 11,
				paddingBottom: 11,
				paddingLeft: 10,
				paddingRight: 10,
				marginLeft: 25,
				marginRight: 25,
			}}>
			<span 
				style={{
					color: "#000000",
					fontSize: 18,
					fontWeight: "bold",
					marginRight: 94,
				}} >
				{"Reading Comprehension"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 235,
				}} >
				{"mprove reading skills and understanding"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 168,
				}} >
				{"1"}
			</span>
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					alignItems: "flex-start",
					paddingTop: 6,
					paddingBottom: 6,
					gap: 26,
				}}>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/lxa3nsze_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/4ji4dezc_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
			</div>
		</div>
		<div 
			style={{
				alignSelf: "stretch",
				display: "flex",
				alignItems: "center",
				background: "#FFFFFF",
				paddingTop: 11,
				paddingBottom: 11,
				paddingLeft: 10,
				paddingRight: 10,
				marginLeft: 25,
				marginRight: 25,
			}}>
			<span 
				style={{
					color: "#000000",
					fontSize: 18,
					fontWeight: "bold",
					marginRight: 193,
				}} >
				{"Writing Skills"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 267,
				}} >
				{"Develop effective writing techniques"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 168,
				}} >
				{"1"}
			</span>
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					alignItems: "flex-start",
					paddingTop: 6,
					paddingBottom: 6,
					gap: 26,
				}}>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/gm1y0z4p_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/iqxfryfw_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
			</div>
		</div>
		<div 
			style={{
				alignSelf: "stretch",
				display: "flex",
				alignItems: "center",
				background: "#FFFFFF",
				paddingTop: 11,
				paddingBottom: 11,
				paddingLeft: 10,
				paddingRight: 10,
				marginLeft: 25,
				marginRight: 25,
			}}>
			<span 
				style={{
					color: "#000000",
					fontSize: 18,
					fontWeight: "bold",
					marginRight: 177,
				}} >
				{"Listening Skills"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 224,
				}} >
				{"Enhance listening comprehension abilities"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 168,
				}} >
				{"1"}
			</span>
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					alignItems: "flex-start",
					paddingTop: 6,
					paddingBottom: 6,
					gap: 26,
				}}>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/ziq24z6p_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/4rsm4g9y_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
			</div>
		</div>
		<div 
			style={{
				alignSelf: "stretch",
				display: "flex",
				alignItems: "center",
				background: "#FFFFFF",
				paddingTop: 11,
				paddingBottom: 11,
				paddingLeft: 10,
				paddingRight: 10,
				marginLeft: 25,
				marginRight: 25,
			}}>
			<span 
				style={{
					color: "#000000",
					fontSize: 18,
					fontWeight: "bold",
					marginRight: 176,
				}} >
				{"Speaking Skills"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 267,
				}} >
				{"Improve oral communication abilities"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 168,
				}} >
				{"1"}
			</span>
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					alignItems: "flex-start",
					paddingTop: 6,
					paddingBottom: 6,
					gap: 26,
				}}>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/lggodzyf_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/pigcuh78_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
			</div>
		</div>
		<div 
			style={{
				alignSelf: "stretch",
				display: "flex",
				alignItems: "center",
				background: "#FFFFFF",
				paddingTop: 11,
				paddingBottom: 11,
				paddingLeft: 10,
				paddingRight: 10,
				marginLeft: 25,
				marginRight: 25,
			}}>
			<span 
				style={{
					color: "#000000",
					fontSize: 18,
					fontWeight: "bold",
					marginRight: 146,
				}} >
				{"Presentation Skills"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 224,
				}} >
				{"Master public speaking and presentations"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 168,
				}} >
				{"1"}
			</span>
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					alignItems: "flex-start",
					paddingTop: 6,
					paddingBottom: 6,
					gap: 26,
				}}>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/jzvhmkn2_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/npvr0m7b_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
			</div>
		</div>
		<div 
			style={{
				alignSelf: "stretch",
				display: "flex",
				alignItems: "center",
				background: "#FFFFFF",
				paddingTop: 11,
				paddingBottom: 11,
				paddingLeft: 10,
				paddingRight: 10,
				marginLeft: 25,
				marginRight: 25,
			}}>
			<span 
				style={{
					color: "#000000",
					fontSize: 18,
					fontWeight: "bold",
					marginRight: 87,
				}} >
				{"Business Communication"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 228,
				}} >
				{"Professional communication in workplace"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 168,
				}} >
				{"1"}
			</span>
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					alignItems: "flex-start",
					paddingTop: 6,
					paddingBottom: 6,
					gap: 26,
				}}>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/b6nbaigq_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/xz2oi58w_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
			</div>
		</div>
		<div 
			style={{
				alignSelf: "stretch",
				display: "flex",
				alignItems: "center",
				background: "#FFFFFF",
				paddingTop: 11,
				paddingBottom: 11,
				paddingLeft: 10,
				paddingRight: 10,
				marginLeft: 25,
				marginRight: 25,
			}}>
			<span 
				style={{
					color: "#000000",
					fontSize: 18,
					fontWeight: "bold",
					marginRight: 153,
				}} >
				{"Academic Writing"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					flex: 1,
				}} >
				{"Write effective academic papers"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 168,
				}} >
				{"1"}
			</span>
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					alignItems: "flex-start",
					paddingTop: 6,
					paddingBottom: 6,
					gap: 26,
				}}>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/cql1k208_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/nv8oy5tw_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
			</div>
		</div>
		<div 
			style={{
				alignSelf: "stretch",
				display: "flex",
				alignItems: "center",
				background: "#FFFFFF",
				paddingTop: 11,
				paddingBottom: 11,
				paddingLeft: 10,
				paddingRight: 10,
				marginLeft: 25,
				marginRight: 25,
			}}>
			<span 
				style={{
					color: "#000000",
					fontSize: 18,
					fontWeight: "bold",
					marginRight: 165,
				}} >
				{"Critical Thinking"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 208,
				}} >
				{"Develop analytical and critical thinking skills"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 17,
					marginRight: 168,
				}} >
				{"1"}
			</span>
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					alignItems: "flex-start",
					paddingTop: 6,
					paddingBottom: 6,
					gap: 26,
				}}>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/ja8jv4ou_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/jm5dlcu3_expires_30_days.png"} 
					style={{
						width: 40,
						height: 37,
						objectFit: "fill",
					}}
				/>
			</div>
		</div>
	</div>
</div>
        </>
    );
};


export default AdminChapters;