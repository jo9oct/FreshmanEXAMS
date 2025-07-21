

import React from "react";

const AdminAnalytics: React.FC = () => {



    return (
        <>
<div 
	style={{
		display: "flex",
		flexDirection: "column",
		background: "#FFFFFF",
	}}>
	<div 
		style={{
			height: 700,
			alignSelf: "stretch",
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
				marginLeft: 72,
				marginRight: 72,
				boxShadow: "-6px 9px 30px #99999940",
			}}>
			<img
				src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/vbylpi4o_expires_30_days.png"} 
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
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/4vkgc3g3_expires_30_days.png"} 
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
				display: "flex",
				alignItems: "flex-start",
				background: "#FFFFFF",
				borderRadius: 7,
				marginBottom: 60,
				marginLeft: 72,
				marginRight: 72,
				boxShadow: "0px 4px 34px #00000040",
			}}>
			<div 
				style={{
					flex: 1,
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
						marginLeft: 67,
						marginRight: 67,
					}} >
					{"Overview"}
				</span>
			</div>
			<div 
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					background: "#FFFFFF",
					paddingTop: 8,
					paddingBottom: 8,
					marginRight: 1,
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
					flex: 1,
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
						marginLeft: 67,
						marginRight: 67,
					}} >
					{"Chapters"}
				</span>
			</div>
			<div 
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					background: "#FFFFFF",
					paddingTop: 8,
					paddingBottom: 8,
					marginRight: 1,
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
						textAlign: "center",
						marginLeft: 65,
						marginRight: 65,
					}} >
					{"Questions"}
				</span>
			</div>
			<div 
				style={{
					flex: 1,
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
						marginLeft: 62,
						marginRight: 62,
					}} >
					{"Blog Posts"}
				</span>
			</div>
			<div 
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					background: "#009905",
					borderRadius: 7,
					paddingTop: 8,
					paddingBottom: 8,
				}}>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 17,
						fontWeight: "bold",
						textAlign: "center",
						marginLeft: 69,
						marginRight: 69,
					}} >
					{"Analytics"}
				</span>
			</div>
		</div>
		<div 
			style={{
				alignSelf: "stretch",
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				background: "#FFFFFF",
				borderRadius: 10,
				paddingTop: 14,
				paddingBottom: 86,
				paddingLeft: 13,
				paddingRight: 13,
				marginBottom: 60,
				marginLeft: 72,
				marginRight: 72,
				gap: 35,
				boxShadow: "0px 4px 27px #00000040",
			}}>
			<span 
				style={{
					color: "#000000",
				}} >
				{"Analytics Dashboard\nPlatform usage and performance metrics"}
			</span>
			<span 
				style={{
					color: "#000000",
					fontSize: 15,
					textAlign: "center",
				}} >
				{"Analytics Dashboard Coming Soon..."}
			</span>
			<div 
				style={{
					alignSelf: "stretch",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				<button 
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "flex-start",
						background: "#FFFFFF",
						borderRadius: 7,
						border: `1px solid #00000040`,
						paddingTop: 2,
						paddingBottom: 2,
						paddingLeft: 12,
						paddingRight: 12,
						textAlign: "left",
					}}
					onClick={()=>alert("Pressed!")}>
					<span 
						style={{
							color: "#000000",
							fontSize: 15,
						}} >
						{"View Reports"}
					</span>
				</button>
			</div>
		</div>
	</div>
</div>
        </>
    );
};


export default AdminAnalytics;
