
import React from "react";
export default () => {
	return (
		<div 
	style={{
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
			marginBottom: 72,
			marginLeft: 71,
			marginRight: 71,
			boxShadow: "-6px 9px 30px #99999940",
		}}>
		<img
			src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/5g1h04lh_expires_30_days.png"} 
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
				src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/7kgaa2a9_expires_30_days.png"} 
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
			marginBottom: 37,
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
				boxShadow: "0px 4px 36px #00000040",
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
					paddingLeft: 72,
					paddingRight: 72,
					textAlign: "left",
				}}
				onClick={()=>alert("Pressed!")}>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 17,
						fontWeight: "bold",
					}} >
					{"Courses"}
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
					{"Chapters"}
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
	<div 
		style={{
			alignSelf: "stretch",
			display: "flex",
			alignItems: "center",
			marginBottom: 32,
			marginLeft: 72,
			marginRight: 72,
		}}>
		<span 
			style={{
				color: "#000000",
				fontSize: 27,
				fontWeight: "bold",
				marginRight: 855,
			}} >
			{"Course Management"}
		</span>
		<button 
			style={{
				flexShrink: 0,
				display: "flex",
				alignItems: "center",
				background: "#009905",
				borderRadius: 5,
				border: "none",
				paddingTop: 5,
				paddingBottom: 5,
				paddingLeft: 15,
				paddingRight: 15,
				gap: 18,
				textAlign: "left",
			}}
			onClick={()=>alert("Pressed!")}>
			<img
				src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/rv08591k_expires_30_days.png"} 
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
				}} >
				{"Add Course"}
			</span>
		</button>
	</div>
	<div 
		style={{
			alignSelf: "stretch",
			background: "#FFFFFF",
			borderRadius: 10,
			paddingTop: 11,
			paddingBottom: 11,
			marginBottom: 31,
			marginLeft: 72,
			marginRight: 72,
			boxShadow: "0px 0px 72px #00000040",
		}}>
		<div 
			style={{
				alignSelf: "stretch",
				background: "#FFFFFF",
				marginLeft: 16,
				marginRight: 16,
			}}>
			<div 
				style={{
					alignSelf: "stretch",
					display: "flex",
					alignItems: "flex-start",
					background: "#FFFFFF",
					borderRadius: 10,
					paddingLeft: 14,
					paddingRight: 14,
					boxShadow: "0px 4px 5px #00000040",
				}}>
				<span 
					style={{
						color: "#313131",
						fontSize: 17,
						fontWeight: "bold",
						marginRight: 71,
						width: 32,
					}} >
					{"Icon"}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 17,
						fontWeight: "bold",
						marginRight: 630,
						width: 34,
					}} >
					{"Title"}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 17,
						fontWeight: "bold",
						marginRight: 79,
						width: 73,
					}} >
					{"Chapters"}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 17,
						fontWeight: "bold",
						marginRight: 80,
						width: 80,
					}} >
					{"Questions"}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 17,
						fontWeight: "bold",
						width: 60,
					}} >
					{"Actions"}
				</span>
			</div>
			<div 
				style={{
					alignSelf: "stretch",
					display: "flex",
					alignItems: "center",
					background: "#FFFFFF",
					borderRadius: 10,
					paddingLeft: 14,
					paddingRight: 14,
					boxShadow: "0px 4px 5px #00000040",
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
						marginRight: 86,
						width: 17,
					}} >
					{"📚"}
				</span>
				<span 
					style={{
						color: "#000000",
						marginRight: 60,
					}} >
					{"Communicative English I & II\nDevelop essential English communication skills for academic and professional success."}
				</span>
				<div 
					style={{
						flex: 1,
						alignSelf: "stretch",
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
					}}>
					<span 
						style={{
							color: "#313131",
							fontSize: 16,
							marginRight: 136,
							width: 20,
						}} >
						{"10"}
					</span>
				</div>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						width: 16,
					}} >
					{"10"}
				</span>
				<div 
					style={{
						flex: 1,
						alignSelf: "stretch",
					}}>
				</div>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/ckjr85wr_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						marginRight: 19,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/mp15dadt_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						objectFit: "fill",
					}}
				/>
			</div>
			<div 
				style={{
					alignSelf: "stretch",
					display: "flex",
					alignItems: "center",
					background: "#FFFFFF",
					borderRadius: 10,
					paddingLeft: 14,
					paddingRight: 14,
					boxShadow: "0px 4px 5px #00000040",
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
						marginRight: 86,
						width: 17,
					}} >
					{"🤝"}
				</span>
				<span 
					style={{
						color: "#000000",
						marginRight: 263,
					}} >
					{"Moral and Citizenship Education\nUnderstanding ethical principles and civic responsibilities."}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 136,
						width: 20,
					}} >
					{"10"}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 144,
						width: 16,
					}} >
					{"10"}
				</span>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/sxuf50f4_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						marginRight: 19,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/6e06i2n6_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						objectFit: "fill",
					}}
				/>
			</div>
			<div 
				style={{
					alignSelf: "stretch",
					display: "flex",
					alignItems: "center",
					background: "#FFFFFF",
					borderRadius: 10,
					paddingLeft: 14,
					paddingRight: 14,
					boxShadow: "0px 4px 5px #00000040",
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
						marginRight: 86,
						width: 17,
					}} >
					{"💼"}
				</span>
				<span 
					style={{
						color: "#000000",
						marginRight: 258,
					}} >
					{"Entrepreneurship\nLearn business fundamentals and entrepreneurial thinking."}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 136,
						width: 16,
					}} >
					{"10"}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 144,
						width: 16,
					}} >
					{"10"}
				</span>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/7volxsc4_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						marginRight: 19,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/t3uvaia9_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						objectFit: "fill",
					}}
				/>
			</div>
			<div 
				style={{
					alignSelf: "stretch",
					display: "flex",
					alignItems: "center",
					background: "#FFFFFF",
					borderRadius: 10,
					paddingLeft: 14,
					paddingRight: 14,
					boxShadow: "0px 4px 5px #00000040",
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
						marginRight: 86,
						width: 17,
					}} >
					{"🧬"}
				</span>
				<span 
					style={{
						color: "#000000",
						marginRight: 217,
					}} >
					{"General Biology\nFundamental concepts of life sciences and biological processes."}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 136,
						width: 16,
					}} >
					{"10"}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 144,
						width: 16,
					}} >
					{"10"}
				</span>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/frjha7ew_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						marginRight: 19,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/a7s1ss1z_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						objectFit: "fill",
					}}
				/>
			</div>
			<div 
				style={{
					alignSelf: "stretch",
					display: "flex",
					alignItems: "center",
					background: "#FFFFFF",
					borderRadius: 10,
					paddingLeft: 14,
					paddingRight: 14,
					boxShadow: "0px 4px 5px #00000040",
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
						marginRight: 86,
						width: 17,
					}} >
					{"📐"}
				</span>
				<span 
					style={{
						color: "#000000",
						marginRight: 221,
					}} >
					{"Mathematics for Natural Sciences\nMathematical concepts essential for natural science disciplines."}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 136,
						width: 16,
					}} >
					{"10"}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 144,
						width: 16,
					}} >
					{"10"}
				</span>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/zium8nj5_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						marginRight: 19,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/waqob1jf_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						objectFit: "fill",
					}}
				/>
			</div>
			<div 
				style={{
					alignSelf: "stretch",
					display: "flex",
					alignItems: "center",
					background: "#FFFFFF",
					borderRadius: 10,
					paddingLeft: 14,
					paddingRight: 14,
					boxShadow: "0px 4px 5px #00000040",
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
						marginRight: 86,
						width: 17,
					}} >
					{"📊"}
				</span>
				<span 
					style={{
						color: "#000000",
						marginRight: 216,
					}} >
					{"Mathematics for Social Sciences\nMathematical tools and concepts for social science applications."}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 136,
						width: 16,
					}} >
					{"10"}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 144,
						width: 16,
					}} >
					{"10"}
				</span>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/k3inu2av_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						marginRight: 19,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/socf3irt_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						objectFit: "fill",
					}}
				/>
			</div>
			<div 
				style={{
					alignSelf: "stretch",
					display: "flex",
					alignItems: "center",
					background: "#FFFFFF",
					borderRadius: 10,
					paddingLeft: 14,
					paddingRight: 14,
					boxShadow: "0px 4px 5px #00000040",
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
						marginRight: 86,
						width: 17,
					}} >
					{"⚛️"}
				</span>
				<span 
					style={{
						color: "#000000",
						marginRight: 256,
					}} >
					{"General Physics\nFundamental principles of physics and natural phenomena."}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 136,
						width: 16,
					}} >
					{"10"}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 144,
						width: 16,
					}} >
					{"10"}
				</span>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/vik3hxte_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						marginRight: 19,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/qvccvc3p_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						objectFit: "fill",
					}}
				/>
			</div>
			<div 
				style={{
					alignSelf: "stretch",
					display: "flex",
					alignItems: "center",
					background: "#FFFFFF",
					borderRadius: 10,
					paddingLeft: 14,
					paddingRight: 14,
					boxShadow: "0px 4px 5px #00000040",
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
						marginRight: 86,
						width: 17,
					}} >
					{"💰"}
				</span>
				<span 
					style={{
						color: "#000000",
					}} >
					{"Introduction to Economics\nBasic economic principles and market systems."}
				</span>
				<div 
					style={{
						flex: 1,
						alignSelf: "stretch",
					}}>
				</div>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 136,
						width: 16,
					}} >
					{"10"}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 144,
						width: 16,
					}} >
					{"10"}
				</span>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/1qqqly7j_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						marginRight: 19,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/29yjhisy_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						objectFit: "fill",
					}}
				/>
			</div>
			<div 
				style={{
					alignSelf: "stretch",
					display: "flex",
					alignItems: "center",
					background: "#FFFFFF",
					borderRadius: 10,
					paddingLeft: 14,
					paddingRight: 14,
					boxShadow: "0px 4px 5px #00000040",
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
						marginRight: 86,
						width: 17,
					}} >
					{"🧠"}
				</span>
				<span 
					style={{
						color: "#000000",
						marginRight: 285,
					}} >
					{"General Psychology\nUnderstanding human behavior and mental processes."}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 136,
						width: 16,
					}} >
					{"10"}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 144,
						width: 16,
					}} >
					{"10"}
				</span>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/le8or1uh_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						marginRight: 19,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/3g1aezdw_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						objectFit: "fill",
					}}
				/>
			</div>
			<div 
				style={{
					alignSelf: "stretch",
					display: "flex",
					alignItems: "center",
					background: "#FFFFFF",
					borderRadius: 10,
					paddingLeft: 14,
					paddingRight: 14,
					boxShadow: "0px 4px 5px #00000040",
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
						marginRight: 86,
						width: 17,
					}} >
					{"🗺️"}
				</span>
				<span 
					style={{
						color: "#000000",
						marginRight: 206,
					}} >
					{"Geography of Ethiopia and The Horn\nPhysical and human geography of Ethiopia and the Horn of Africa."}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 136,
						width: 16,
					}} >
					{"10"}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 144,
						width: 16,
					}} >
					{"10"}
				</span>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/mymi1kn0_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						marginRight: 19,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/3zmg296e_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						objectFit: "fill",
					}}
				/>
			</div>
			<div 
				style={{
					alignSelf: "stretch",
					display: "flex",
					alignItems: "center",
					background: "#FFFFFF",
					borderRadius: 10,
					paddingLeft: 14,
					paddingRight: 14,
					boxShadow: "0px 4px 5px #00000040",
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
						marginRight: 86,
						width: 17,
					}} >
					{"💻"}
				</span>
				<span 
					style={{
						color: "#000000",
					}} >
					{"Introduction to Emerging Technologies\nModern technologies shaping the future."}
				</span>
				<div 
					style={{
						flex: 1,
						alignSelf: "stretch",
					}}>
				</div>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 136,
						width: 16,
					}} >
					{"10"}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 144,
						width: 16,
					}} >
					{"10"}
				</span>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/1bp81l9y_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						marginRight: 19,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/8bfdie50_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						objectFit: "fill",
					}}
				/>
			</div>
			<div 
				style={{
					alignSelf: "stretch",
					display: "flex",
					alignItems: "center",
					background: "#FFFFFF",
					borderRadius: 10,
					paddingLeft: 14,
					paddingRight: 14,
					boxShadow: "0px 4px 5px #00000040",
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
						marginRight: 86,
						width: 17,
					}} >
					{"💻"}
				</span>
				<span 
					style={{
						color: "#000000",
					}} >
					{"Introduction to Emerging Technologies\nModern technologies shaping the future."}
				</span>
				<div 
					style={{
						flex: 1,
						alignSelf: "stretch",
					}}>
				</div>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 136,
						width: 16,
					}} >
					{"10"}
				</span>
				<span 
					style={{
						color: "#313131",
						fontSize: 16,
						fontWeight: "bold",
						marginRight: 144,
						width: 16,
					}} >
					{"10"}
				</span>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/cfek75er_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						marginRight: 19,
						objectFit: "fill",
					}}
				/>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/7vspzr8f_expires_30_days.png"} 
					style={{
						width: 29,
						height: 27,
						objectFit: "fill",
					}}
				/>
			</div>
		</div>
	</div>
</div>
	)
}
