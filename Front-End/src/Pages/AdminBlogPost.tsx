
import React from "react";

const AdminBlogPost: React.FC = () => {



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
			height: 1033,
			alignSelf: "stretch",
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
				marginBottom: 73,
				marginLeft: 72,
				marginRight: 72,
				boxShadow: "0px 4px 45px #99999940",
			}}>
			<img
				src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/2i07z5qz_expires_30_days.png"} 
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
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/o9gwc60l_expires_30_days.png"} 
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
				marginBottom: 50,
				marginLeft: 72,
				marginRight: 72,
				boxShadow: "0px 4px 47px #00000040",
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
						marginLeft: 69,
						marginRight: 69,
					}} >
					{"Analytics"}
				</span>
			</div>
		</div>
		<div 
			style={{
				display: "flex",
				alignItems: "center",
				marginBottom: 49,
				marginLeft: 109,
			}}>
			<span 
				style={{
					color: "#000000",
					fontSize: 27,
					fontWeight: "bold",
					marginRight: 856,
				}} >
				{"Blog Management"}
			</span>
			<div 
				style={{
					flexShrink: 0,
					display: "flex",
					alignItems: "center",
					background: "#009905",
					borderRadius: 5,
					paddingTop: 5,
					paddingBottom: 5,
					paddingLeft: 15,
					paddingRight: 15,
					gap: 18,
				}}>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/scus69sz_expires_30_days.png"} 
					style={{
						borderRadius: 5,
						width: 12,
						height: 12,
						objectFit: "fill",
					}}
				/>
				<input
					placeholder={"Add Blog"}
					// value={input1}
					// onChange={(event)=>onChangeInput1(event.target.value)}
					style={{
						color: "#FFFFFF",
						fontSize: 15,
						fontWeight: "bold",
						width: 69,
						background: "none",
						border: "none",
						paddingTop: -1,
						paddingBottom: -1,
					}}
				/>
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
				paddingBottom: 12,
				marginBottom: 101,
				marginLeft: 73,
				marginRight: 73,
				gap: 10,
				boxShadow: "5px 8px 72px #00000040",
			}}>
			<span 
				style={{
					color: "#000000",
					marginLeft: 14,
				}} >
				{"📚Communicative English I & II(10 chapters)"}
			</span>
			<div 
				style={{
					alignSelf: "stretch",
					borderRadius: 6,
					marginLeft: 25,
					marginRight: 25,
				}}>
				<div 
					style={{
						alignSelf: "stretch",
						display: "flex",
						alignItems: "flex-start",
						background: "#FFFFFF",
						padding: 10,
					}}>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							fontWeight: "bold",
							marginRight: 266,
						}} >
						{"Title"}
					</span>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							fontWeight: "bold",
							marginTop: 1,
							marginBottom: 1,
							marginRight: 73,
						}} >
						{"Author"}
					</span>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							fontWeight: "bold",
							marginTop: 1,
							marginBottom: 1,
							marginRight: 70,
						}} >
						{"Status"}
					</span>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							fontWeight: "bold",
							marginTop: 1,
							marginBottom: 1,
							marginRight: 50,
						}} >
						{"Published"}
					</span>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							fontWeight: "bold",
							marginTop: 1,
							marginBottom: 1,
							marginRight: 150,
						}} >
						{"Tags"}
					</span>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							fontWeight: "bold",
							marginTop: 1,
							marginBottom: 1,
							marginRight: 90,
						}} >
						{"Read Time"}
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
				<div 
					style={{
						alignSelf: "stretch",
						display: "flex",
						alignItems: "center",
						background: "#FFFFFF",
						paddingLeft: 10,
						paddingRight: 10,
					}}>
					<span 
						style={{
							color: "#000000",
							fontSize: 18,
							width: 136,
						}} >
						{"Grammar Basics"}
					</span>
					<div 
						style={{
							flex: 1,
							alignSelf: "stretch",
						}}>
					</div>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							marginRight: 56,
							width: 71,
						}} >
						{"Dr. Sarah Johnson"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							background: "#009F05",
							borderRadius: 16,
							paddingLeft: 10,
							paddingRight: 10,
							marginRight: 32,
						}}>
						<span 
							style={{
								color: "#FFFFFF",
								fontSize: 14,
								fontWeight: "bold",
							}} >
							{"Published"}
						</span>
					</div>
					<span 
						style={{
							color: "#000000",
							fontSize: 14,
							marginRight: 50,
						}} >
						{"2024-01-15"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							marginRight: 61,
							gap: 13,
						}}>
						<button 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "none",
								borderRadius: 16,
								border: `1px solid #00000040`,
								paddingTop: 6,
								paddingBottom: 6,
								paddingLeft: 14,
								paddingRight: 14,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#000000",
									fontSize: 12,
									fontWeight: "bold",
								}} >
								{"study-tips"}
							</span>
						</button>
						<button 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "none",
								borderRadius: 16,
								border: `1px solid #00000040`,
								paddingTop: 1,
								paddingBottom: 1,
								paddingLeft: 6,
								paddingRight: 6,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#000000",
									fontSize: 12,
									fontWeight: "bold",
								}} >
								{"academic-success"}
							</span>
						</button>
					</div>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							marginRight: 131,
						}} >
						{"3 min"}
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
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/347oy9l9_expires_30_days.png"} 
							style={{
								width: 40,
								height: 37,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/y3df3jvm_expires_30_days.png"} 
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
						paddingLeft: 9,
						paddingRight: 9,
					}}>
					<span 
						style={{
							color: "#000000",
							fontSize: 18,
							marginRight: 135,
							width: 166,
						}} >
						{"Vocabulary Building"}
					</span>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							marginRight: 26,
							width: 101,
						}} >
						{"Prof. Michael Chen"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							background: "#009F05",
							borderRadius: 16,
							paddingLeft: 10,
							paddingRight: 10,
							marginRight: 32,
						}}>
						<span 
							style={{
								color: "#FFFFFF",
								fontSize: 14,
								fontWeight: "bold",
							}} >
							{"Published"}
						</span>
					</div>
					<span 
						style={{
							color: "#000000",
							fontSize: 14,
							marginRight: 50,
						}} >
						{"2024-01-15"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							marginRight: 61,
							gap: 11,
						}}>
						<button 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "none",
								borderRadius: 16,
								border: `1px solid #00000040`,
								paddingTop: 6,
								paddingBottom: 6,
								paddingLeft: 14,
								paddingRight: 14,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#000000",
									fontSize: 12,
									fontWeight: "bold",
								}} >
								{"study-tips"}
							</span>
						</button>
						<button 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "none",
								borderRadius: 16,
								border: `1px solid #00000040`,
								paddingTop: 1,
								paddingBottom: 1,
								paddingLeft: 6,
								paddingRight: 6,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#000000",
									fontSize: 12,
									fontWeight: "bold",
								}} >
								{"academic-success"}
							</span>
						</button>
					</div>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							marginRight: 133,
						}} >
						{"1 min"}
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
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/7awiwzss_expires_30_days.png"} 
							style={{
								width: 40,
								height: 37,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/cwa6zbsc_expires_30_days.png"} 
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
						alignItems: "flex-start",
						background: "#FFFFFF",
						paddingLeft: 9,
						paddingRight: 9,
					}}>
					<span 
						style={{
							color: "#000000",
							fontSize: 18,
							marginTop: 2,
							marginRight: 97,
							width: 204,
						}} >
						{"Reading Comprehension"}
					</span>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							marginRight: 53,
						}} >
						{"Dr. Almaz Tekle"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							background: "#009F05",
							borderRadius: 16,
							paddingLeft: 10,
							paddingRight: 10,
							marginTop: 23,
							marginRight: 32,
						}}>
						<span 
							style={{
								color: "#FFFFFF",
								fontSize: 14,
								fontWeight: "bold",
							}} >
							{"Published"}
						</span>
					</div>
					<span 
						style={{
							color: "#000000",
							fontSize: 14,
							marginTop: 23,
							marginRight: 50,
						}} >
						{"2024-01-15"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							marginTop: 1,
							marginRight: 61,
							gap: 10,
						}}>
						<button 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "none",
								borderRadius: 16,
								border: `1px solid #00000040`,
								paddingTop: 1,
								paddingBottom: 1,
								paddingLeft: 6,
								paddingRight: 6,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#000000",
									fontSize: 12,
									fontWeight: "bold",
								}} >
								{"academic-success"}
							</span>
						</button>
						<button 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "none",
								borderRadius: 16,
								border: `1px solid #00000040`,
								paddingTop: 6,
								paddingBottom: 6,
								paddingLeft: 14,
								paddingRight: 14,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#000000",
									fontSize: 12,
									fontWeight: "bold",
								}} >
								{"study-tips"}
							</span>
						</button>
					</div>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							marginTop: 18,
							flex: 1,
						}} >
						{"1 min"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							alignItems: "flex-start",
							paddingTop: 6,
							paddingBottom: 6,
							marginTop: 11,
							marginBottom: 11,
							gap: 26,
						}}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/m0gtp2od_expires_30_days.png"} 
							style={{
								width: 40,
								height: 37,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/2sla7nsy_expires_30_days.png"} 
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
						alignItems: "flex-start",
						background: "#FFFFFF",
						paddingLeft: 9,
						paddingRight: 9,
					}}>
					<span 
						style={{
							color: "#000000",
							fontSize: 18,
							marginTop: 2,
							marginRight: 97,
							width: 204,
						}} >
						{"Reading Comprehension"}
					</span>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							marginRight: 53,
						}} >
						{"Dr. Almaz Tekle"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							background: "#009F05",
							borderRadius: 16,
							paddingLeft: 10,
							paddingRight: 10,
							marginTop: 23,
							marginRight: 32,
						}}>
						<span 
							style={{
								color: "#FFFFFF",
								fontSize: 14,
								fontWeight: "bold",
							}} >
							{"Published"}
						</span>
					</div>
					<span 
						style={{
							color: "#000000",
							fontSize: 14,
							marginTop: 23,
							marginRight: 50,
						}} >
						{"2024-01-15"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							marginTop: 1,
							marginRight: 61,
							gap: 10,
						}}>
						<button 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "none",
								borderRadius: 16,
								border: `1px solid #00000040`,
								paddingTop: 1,
								paddingBottom: 1,
								paddingLeft: 6,
								paddingRight: 6,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#000000",
									fontSize: 12,
									fontWeight: "bold",
								}} >
								{"academic-success"}
							</span>
						</button>
						<button 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "none",
								borderRadius: 16,
								border: `1px solid #00000040`,
								paddingTop: 6,
								paddingBottom: 6,
								paddingLeft: 14,
								paddingRight: 14,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#000000",
									fontSize: 12,
									fontWeight: "bold",
								}} >
								{"study-tips"}
							</span>
						</button>
					</div>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							marginTop: 18,
							flex: 1,
						}} >
						{"1 min"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							alignItems: "flex-start",
							paddingTop: 6,
							paddingBottom: 6,
							marginTop: 11,
							marginBottom: 11,
							gap: 26,
						}}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/gfsxhtp1_expires_30_days.png"} 
							style={{
								width: 40,
								height: 37,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/7yp5mcr4_expires_30_days.png"} 
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
						alignItems: "flex-start",
						background: "#FFFFFF",
						paddingLeft: 9,
						paddingRight: 9,
					}}>
					<span 
						style={{
							color: "#000000",
							fontSize: 18,
							marginTop: 2,
							marginRight: 97,
							width: 204,
						}} >
						{"Reading Comprehension"}
					</span>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							marginRight: 53,
						}} >
						{"Dr. Almaz Tekle"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							background: "#009F05",
							borderRadius: 16,
							paddingLeft: 10,
							paddingRight: 10,
							marginTop: 23,
							marginRight: 32,
						}}>
						<span 
							style={{
								color: "#FFFFFF",
								fontSize: 14,
								fontWeight: "bold",
							}} >
							{"Published"}
						</span>
					</div>
					<span 
						style={{
							color: "#000000",
							fontSize: 14,
							marginTop: 23,
							marginRight: 50,
						}} >
						{"2024-01-15"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							marginTop: 1,
							marginRight: 61,
							gap: 10,
						}}>
						<button 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "none",
								borderRadius: 16,
								border: `1px solid #00000040`,
								paddingTop: 1,
								paddingBottom: 1,
								paddingLeft: 6,
								paddingRight: 6,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#000000",
									fontSize: 12,
									fontWeight: "bold",
								}} >
								{"academic-success"}
							</span>
						</button>
						<button 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "none",
								borderRadius: 16,
								border: `1px solid #00000040`,
								paddingTop: 6,
								paddingBottom: 6,
								paddingLeft: 14,
								paddingRight: 14,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#000000",
									fontSize: 12,
									fontWeight: "bold",
								}} >
								{"study-tips"}
							</span>
						</button>
					</div>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							marginTop: 18,
							flex: 1,
						}} >
						{"1 min"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							alignItems: "flex-start",
							paddingTop: 6,
							paddingBottom: 6,
							marginTop: 11,
							marginBottom: 11,
							gap: 26,
						}}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/chhrn9ou_expires_30_days.png"} 
							style={{
								width: 40,
								height: 37,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/pea6g7ri_expires_30_days.png"} 
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
						alignItems: "flex-start",
						background: "#FFFFFF",
						paddingLeft: 9,
						paddingRight: 9,
					}}>
					<span 
						style={{
							color: "#000000",
							fontSize: 18,
							marginTop: 2,
							marginRight: 97,
							width: 204,
						}} >
						{"Reading Comprehension"}
					</span>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							marginRight: 53,
						}} >
						{"Dr. Almaz Tekle"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							background: "#009F05",
							borderRadius: 16,
							paddingLeft: 10,
							paddingRight: 10,
							marginTop: 23,
							marginRight: 32,
						}}>
						<span 
							style={{
								color: "#FFFFFF",
								fontSize: 14,
								fontWeight: "bold",
							}} >
							{"Published"}
						</span>
					</div>
					<span 
						style={{
							color: "#000000",
							fontSize: 14,
							marginTop: 23,
							marginRight: 50,
						}} >
						{"2024-01-15"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							marginTop: 1,
							marginRight: 61,
							gap: 10,
						}}>
						<button 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "none",
								borderRadius: 16,
								border: `1px solid #00000040`,
								paddingTop: 1,
								paddingBottom: 1,
								paddingLeft: 6,
								paddingRight: 6,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#000000",
									fontSize: 12,
									fontWeight: "bold",
								}} >
								{"academic-success"}
							</span>
						</button>
						<button 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "none",
								borderRadius: 16,
								border: `1px solid #00000040`,
								paddingTop: 6,
								paddingBottom: 6,
								paddingLeft: 14,
								paddingRight: 14,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#000000",
									fontSize: 12,
									fontWeight: "bold",
								}} >
								{"study-tips"}
							</span>
						</button>
					</div>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							marginTop: 18,
							flex: 1,
						}} >
						{"1 min"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							alignItems: "flex-start",
							paddingTop: 6,
							paddingBottom: 6,
							marginTop: 11,
							marginBottom: 11,
							gap: 26,
						}}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/2jpjdote_expires_30_days.png"} 
							style={{
								width: 40,
								height: 37,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/40d1ohxa_expires_30_days.png"} 
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
						alignItems: "flex-start",
						background: "#FFFFFF",
						paddingLeft: 9,
						paddingRight: 9,
					}}>
					<span 
						style={{
							color: "#000000",
							fontSize: 18,
							marginTop: 2,
							marginRight: 97,
							width: 204,
						}} >
						{"Reading Comprehension"}
					</span>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							marginRight: 53,
						}} >
						{"Dr. Almaz Tekle"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							background: "#009F05",
							borderRadius: 16,
							paddingLeft: 10,
							paddingRight: 10,
							marginTop: 23,
							marginRight: 32,
						}}>
						<span 
							style={{
								color: "#FFFFFF",
								fontSize: 14,
								fontWeight: "bold",
							}} >
							{"Published"}
						</span>
					</div>
					<span 
						style={{
							color: "#000000",
							fontSize: 14,
							marginTop: 23,
							marginRight: 50,
						}} >
						{"2024-01-15"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							marginTop: 1,
							marginRight: 61,
							gap: 10,
						}}>
						<button 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "none",
								borderRadius: 16,
								border: `1px solid #00000040`,
								paddingTop: 1,
								paddingBottom: 1,
								paddingLeft: 6,
								paddingRight: 6,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#000000",
									fontSize: 12,
									fontWeight: "bold",
								}} >
								{"academic-success"}
							</span>
						</button>
						<button 
							style={{
								display: "flex",
								flexDirection: "column",
								alignItems: "flex-start",
								background: "none",
								borderRadius: 16,
								border: `1px solid #00000040`,
								paddingTop: 6,
								paddingBottom: 6,
								paddingLeft: 14,
								paddingRight: 14,
								textAlign: "left",
							}}
							onClick={()=>alert("Pressed!")}>
							<span 
								style={{
									color: "#000000",
									fontSize: 12,
									fontWeight: "bold",
								}} >
								{"study-tips"}
							</span>
						</button>
					</div>
					<span 
						style={{
							color: "#000000",
							fontSize: 17,
							marginTop: 18,
							flex: 1,
						}} >
						{"1 min"}
					</span>
					<div 
						style={{
							flexShrink: 0,
							display: "flex",
							alignItems: "flex-start",
							paddingTop: 6,
							paddingBottom: 6,
							marginTop: 11,
							marginBottom: 11,
							gap: 26,
						}}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/nbtbhows_expires_30_days.png"} 
							style={{
								width: 40,
								height: 37,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/02av7z2p_expires_30_days.png"} 
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
	</div>
</div>

        </>
    );
};


export default AdminBlogPost;