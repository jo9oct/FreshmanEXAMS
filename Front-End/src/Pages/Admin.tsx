
import React from "react";

const Admin: React.FC = () => {


    return (
        <>
<div 
	style={{
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start",
		background: "#FFFFFF",
	}}>
	<span 
		style={{
			color: "#150073",
			fontSize: 24,
			fontWeight: "bold",
		}} >
		{""}
	</span>
	<div 
		style={{
			alignSelf: "stretch",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			paddingBottom: 1,
			marginTop: 10,
			marginBottom: 13,
			marginRight: 587,
		}}>
		<span 
			style={{
				color: "#8400F7",
				fontSize: 18,
			}} >
			{""}
		</span>
	</div>
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
			src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/pbsotss7_expires_30_days.png"} 
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
				src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/gl1pyzbm_expires_30_days.png"} 
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
			marginBottom: 74,
			marginLeft: 71,
			marginRight: 71,
		}}>
		<div 
			style={{
				alignSelf: "stretch",
				display: "flex",
				alignItems: "flex-start",
				background: "#FFFFFF",
				borderRadius: 7,
				boxShadow: "0px 4.999999523162842px 45px #00000040",
			}}>
			<button 
				style={{
					flexShrink: 0,
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					background: "#009905",
					borderRadius: 7,
					border: "none",
					paddingTop: 8,
					paddingBottom: 8,
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
					{"Overview"}
				</span>
			</button>
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					background: "#FFFFFF",
					paddingTop: 8,
					paddingBottom: 8,
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
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					background: "#FFFFFF",
					paddingTop: 8,
					paddingBottom: 8,
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
					paddingTop: 8,
					paddingBottom: 8,
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
					paddingTop: 8,
					paddingBottom: 8,
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
					paddingTop: 8,
					paddingBottom: 8,
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
			alignItems: "flex-start",
			marginBottom: 175,
			marginLeft: 72,
			marginRight: 72,
			boxShadow: "0px 9px 12px #00000040",
		}}>
		<div 
			style={{
				flex: 1,
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				background: "linear-gradient(180deg, #707CFF, #0015FF)",
				borderRadius: 14,
				paddingTop: 8,
				paddingBottom: 8,
				marginRight: 42,
				gap: 20,
			}}>
			<div 
				style={{
					display: "flex",
					alignItems: "center",
					marginLeft: 14,
				}}>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 15,
						fontWeight: "bold",
						marginRight: 118,
					}} >
					{"Total Courses"}
				</span>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 26,
						fontWeight: "bold",
						marginTop: 2,
						marginBottom: 2,
					}} >
					{"📚"}
				</span>
			</div>
			<div 
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					marginLeft: 14,
				}}>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 22,
						fontWeight: "bold",
						marginLeft: 1,
					}} >
					{"12"}
				</span>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 13,
						fontWeight: "bold",
					}} >
					{"Active Learning Modules"}
				</span>
			</div>
		</div>
		<div 
			style={{
				flex: 1,
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				background: "linear-gradient(180deg, #17E61E, #018906)",
				borderRadius: 14,
				paddingTop: 8,
				paddingBottom: 8,
				marginRight: 41,
				gap: 20,
			}}>
			<div 
				style={{
					display: "flex",
					alignItems: "center",
					marginLeft: 13,
				}}>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 15,
						fontWeight: "bold",
						marginRight: 112,
					}} >
					{"Total Chapters"}
				</span>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 26,
						fontWeight: "bold",
						marginTop: 2,
						marginBottom: 2,
					}} >
					{"📚"}
				</span>
			</div>
			<div 
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					marginLeft: 13,
				}}>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 22,
						fontWeight: "bold",
						marginLeft: 1,
					}} >
					{"120"}
				</span>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 13,
						fontWeight: "bold",
					}} >
					{"Study Section Available"}
				</span>
			</div>
		</div>
		<div 
			style={{
				flex: 1,
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				background: "linear-gradient(180deg, #E253FF, #8200BF)",
				borderRadius: 14,
				paddingTop: 8,
				paddingBottom: 8,
				marginRight: 42,
				gap: 20,
			}}>
			<div 
				style={{
					display: "flex",
					alignItems: "center",
					marginLeft: 14,
				}}>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 15,
						fontWeight: "bold",
						marginRight: 104,
					}} >
					{"Total Questions"}
				</span>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 26,
						fontWeight: "bold",
						marginTop: 2,
						marginBottom: 2,
					}} >
					{"📚"}
				</span>
			</div>
			<div 
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					marginLeft: 14,
				}}>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 22,
						fontWeight: "bold",
						marginLeft: 1,
					}} >
					{"123"}
				</span>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 13,
						fontWeight: "bold",
					}} >
					{"Practice Questions"}
				</span>
			</div>
		</div>
		<div 
			style={{
				flex: 1,
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				background: "linear-gradient(180deg, #FFA353, #F86001)",
				borderRadius: 14,
				paddingTop: 8,
				paddingBottom: 8,
				gap: 20,
			}}>
			<div 
				style={{
					display: "flex",
					alignItems: "center",
					marginLeft: 13,
				}}>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 15,
						fontWeight: "bold",
						marginRight: 143,
					}} >
					{"Blog Posts"}
				</span>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 26,
						fontWeight: "bold",
						marginTop: 2,
						marginBottom: 2,
					}} >
					{"📚"}
				</span>
			</div>
			<div 
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					marginLeft: 13,
				}}>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 22,
						fontWeight: "bold",
						marginLeft: 1,
					}} >
					{"9"}
				</span>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 13,
						fontWeight: "bold",
					}} >
					{"8 published"}
				</span>
			</div>
		</div>
	</div>
</div>
        </>
    );
};


export default Admin;
