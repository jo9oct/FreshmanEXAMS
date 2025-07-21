
import React from "react";

const AdminQuestions: React.FC = () => {

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
			height: 2833,
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
				marginBottom: 73,
				marginLeft: 72,
				marginRight: 72,
				boxShadow: "-6px 9px 30px #99999940",
			}}>
			<img
				src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/lk7scbrb_expires_30_days.png"} 
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
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/zgt5qq3y_expires_30_days.png"} 
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
				marginBottom: 33,
				marginLeft: 79,
				marginRight: 79,
				boxShadow: "0px 4px 53px #00000040",
			}}>
			<div 
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					background: "#FFFEFE",
					paddingTop: 8,
					paddingBottom: 8,
					marginRight: 1,
					boxShadow: "0px 4px 4px #00000040",
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
					background: "#FFFEFE",
					paddingTop: 8,
					paddingBottom: 8,
					marginRight: 1,
					boxShadow: "0px 4px 4px #00000040",
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
					background: "#FFFEFE",
					paddingTop: 8,
					paddingBottom: 8,
					boxShadow: "0px 4px 4px #00000040",
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
						textAlign: "center",
						marginLeft: 66,
						marginRight: 66,
					}} >
					{"Chapters"}
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
					marginRight: 1,
				}}>
				<span 
					style={{
						color: "#FFFFFF",
						fontSize: 17,
						fontWeight: "bold",
						textAlign: "center",
						marginLeft: 63,
						marginRight: 63,
					}} >
					{"Questions"}
				</span>
			</div>
			<div 
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					background: "#FFFEFE",
					paddingTop: 8,
					paddingBottom: 8,
					marginRight: 1,
					boxShadow: "0px 4px 4px #00000040",
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 17,
						fontWeight: "bold",
						textAlign: "center",
						marginLeft: 63,
						marginRight: 63,
					}} >
					{"Blog Posts"}
				</span>
			</div>
			<div 
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					background: "#FFFEFE",
					paddingTop: 8,
					paddingBottom: 8,
					boxShadow: "0px 4px 4px #00000040",
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
					{"Analytics"}
				</span>
			</div>
		</div>
		<div 
			style={{
				alignSelf: "stretch",
				display: "flex",
				alignItems: "center",
				marginBottom: 49,
				marginLeft: 73,
				marginRight: 73,
			}}>
			<span 
				style={{
					color: "#000000",
					fontSize: 27,
					fontWeight: "bold",
					marginRight: 825,
				}} >
				{"Question Management"}
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
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/38crdmr3_expires_30_days.png"} 
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
						fontSize: 14,
						fontWeight: "bold",
					}} >
					{"Add Questions"}
				</span>
			</button>
		</div>
		<div 
			style={{
				alignSelf: "stretch",
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				background: "#FFFFFF",
				borderRadius: 10,
				marginBottom: 62,
				marginLeft: 67,
				marginRight: 67,
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
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					borderRadius: 6,
					paddingBottom: 29,
					marginLeft: 25,
					marginRight: 25,
				}}>
				<span 
					style={{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 35,
					}} >
					{"Grammar Basics (3 questions)"}
				</span>
				<div 
					style={{
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
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
								marginRight: 396,
							}} >
							{"Question"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginTop: 1,
								marginBottom: 1,
								marginRight: 441,
							}} >
							{"Correct Answer"}
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
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
					}}>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "center",
							background: "#FFFFFF",
							paddingTop: 16,
							paddingBottom: 16,
							paddingLeft: 10,
							paddingRight: 10,
						}}>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginRight: 105,
							}} >
							{"Which of the following is a correct sentence?"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								marginRight: 460,
							}} >
							{"I go to school"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/w5d3y8xa_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								marginRight: 19,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/69n3zckn_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								objectFit: "fill",
							}}
						/>
					</div>
				</div>
				<div 
					style={{
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
					}}>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "center",
							background: "#FFFFFF",
							paddingTop: 16,
							paddingBottom: 16,
							paddingLeft: 10,
							paddingRight: 10,
						}}>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginRight: 199,
							}} >
							{"What is the past tense of write?"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								marginRight: 521,
							}} >
							{"wrote"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/j5ae7cjn_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								marginRight: 19,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/vbh451ap_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								objectFit: "fill",
							}}
						/>
					</div>
				</div>
				<div 
					style={{
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
						marginBottom: 41,
					}}>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "center",
							background: "#FFFFFF",
							paddingTop: 16,
							paddingBottom: 16,
							paddingLeft: 10,
							paddingRight: 10,
						}}>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginRight: 122,
							}} >
							{"Choose the correct article: ___ apple is red."}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								marginRight: 546,
							}} >
							{"An"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/bgi12fm3_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								marginRight: 19,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/zqk4jmy5_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								objectFit: "fill",
							}}
						/>
					</div>
				</div>
				<span 
					style={{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 41,
					}} >
					{"Vocabulary Building (2 questions)"}
				</span>
				<div 
					style={{
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
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
								marginRight: 396,
							}} >
							{"Question"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginTop: 1,
								marginBottom: 1,
								marginRight: 441,
							}} >
							{"Correct Answer"}
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
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
					}}>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "center",
							background: "#FFFFFF",
							paddingTop: 16,
							paddingBottom: 16,
							paddingLeft: 10,
							paddingRight: 10,
						}}>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginRight: 220,
							}} >
							{"What does ubiquitous mean?"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								marginRight: 407,
							}} >
							{"Present everywhere"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/vvjf7zfz_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								marginRight: 19,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/imbm12zr_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								objectFit: "fill",
							}}
						/>
					</div>
				</div>
				<div 
					style={{
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
						marginBottom: 41,
					}}>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "center",
							background: "#FFFFFF",
							paddingTop: 16,
							paddingBottom: 16,
							paddingLeft: 10,
							paddingRight: 10,
						}}>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginRight: 134,
							}} >
							{"Which word is a synonym for decrease?"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								marginRight: 500,
							}} >
							{"Diminish"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/irvem99u_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								marginRight: 19,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/4tzmyfli_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								objectFit: "fill",
							}}
						/>
					</div>
				</div>
				<span 
					style={{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 41,
					}} >
					{"Reading Comprehension (1 questions)"}
				</span>
				<div 
					style={{
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
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
								marginRight: 396,
							}} >
							{"Question"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginTop: 1,
								marginBottom: 1,
								marginRight: 441,
							}} >
							{"Correct Answer"}
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
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
						marginBottom: 41,
					}}>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "center",
							background: "#FFFFFF",
							paddingTop: 16,
							paddingBottom: 16,
							paddingLeft: 10,
							paddingRight: 10,
						}}>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginRight: 151,
							}} >
							{"What is the main purpose of skimming?"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								marginRight: 373,
							}} >
							{"Get general idea quickly"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/ot1o076k_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								marginRight: 19,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/6ea6630i_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								objectFit: "fill",
							}}
						/>
					</div>
				</div>
				<span 
					style={{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 41,
					}} >
					{"Writing Skills (1 questions)"}
				</span>
				<div 
					style={{
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
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
								marginRight: 396,
							}} >
							{"Question"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginTop: 1,
								marginBottom: 1,
								marginRight: 441,
							}} >
							{"Correct Answer"}
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
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
						marginBottom: 41,
					}}>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "center",
							background: "#FFFFFF",
							paddingTop: 16,
							paddingBottom: 16,
							paddingLeft: 10,
							paddingRight: 10,
						}}>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginRight: 245,
							}} >
							{"What is a thesis statement?"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								marginRight: 448,
							}} >
							{"Main argument"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/nkp453wq_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								marginRight: 19,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/64u77xxs_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								objectFit: "fill",
							}}
						/>
					</div>
				</div>
				<span 
					style={{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 41,
					}} >
					{"Listening Skills (1 questions)"}
				</span>
				<div 
					style={{
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
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
								marginRight: 396,
							}} >
							{"Question"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginTop: 1,
								marginBottom: 1,
								marginRight: 441,
							}} >
							{"Correct Answer"}
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
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
						marginBottom: 41,
					}}>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "center",
							background: "#FFFFFF",
							paddingTop: 16,
							paddingBottom: 16,
							paddingLeft: 10,
							paddingRight: 10,
						}}>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginRight: 273,
							}} >
							{"What is active listening?"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								marginRight: 374,
							}} >
							{"Full attention to speaker"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/3xbvewpc_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								marginRight: 19,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/nt2mn5y2_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								objectFit: "fill",
							}}
						/>
					</div>
				</div>
				<span 
					style={{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 41,
					}} >
					{"Speaking Skills (1 questions)"}
				</span>
				<div 
					style={{
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
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
								marginRight: 396,
							}} >
							{"Question"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginTop: 1,
								marginBottom: 1,
								marginRight: 441,
							}} >
							{"Correct Answer"}
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
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
						marginBottom: 41,
					}}>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "center",
							background: "#FFFFFF",
							paddingTop: 16,
							paddingBottom: 16,
							paddingLeft: 10,
							paddingRight: 10,
						}}>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginRight: 128,
							}} >
							{"What is important for clear pronunciation?"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								marginRight: 397,
							}} >
							{"Stress and intonation"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/hs6g4taa_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								marginRight: 19,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/w3s27lxf_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								objectFit: "fill",
							}}
						/>
					</div>
				</div>
				<span 
					style={{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 41,
					}} >
					{"Presentation Skills (1 questions)"}
				</span>
				<div 
					style={{
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
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
								marginRight: 396,
							}} >
							{"Question"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginTop: 1,
								marginBottom: 1,
								marginRight: 441,
							}} >
							{"Correct Answer"}
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
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
						marginBottom: 41,
					}}>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "center",
							background: "#FFFFFF",
							paddingTop: 16,
							paddingBottom: 16,
							paddingLeft: 10,
							paddingRight: 10,
						}}>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginRight: 122,
							}} >
							{"What should you do first in a presentation?"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								marginRight: 342,
							}} >
							{"Introduce yourself and topic"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/v73v5rbk_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								marginRight: 19,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/mig78rv0_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								objectFit: "fill",
							}}
						/>
					</div>
				</div>
				<span 
					style={{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 41,
					}} >
					{"Business Communication (1 questions)"}
				</span>
				<div 
					style={{
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
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
								marginRight: 396,
							}} >
							{"Question"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginTop: 1,
								marginBottom: 1,
								marginRight: 441,
							}} >
							{"Correct Answer"}
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
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
						marginBottom: 41,
					}}>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "center",
							background: "#FFFFFF",
							paddingTop: 16,
							paddingBottom: 16,
							paddingLeft: 10,
							paddingRight: 10,
						}}>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginRight: 158,
							}} >
							{"What is the purpose of a formal email?"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								marginRight: 343,
							}} >
							{"Professional communication"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/6tpa0ho2_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								marginRight: 19,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/cgsmeboe_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								objectFit: "fill",
							}}
						/>
					</div>
				</div>
				<span 
					style={{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 41,
					}} >
					{"Academic Writing (1 questions)"}
				</span>
				<div 
					style={{
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
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
								marginRight: 396,
							}} >
							{"Question"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginTop: 1,
								marginBottom: 1,
								marginRight: 441,
							}} >
							{"Correct Answer"}
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
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
						marginBottom: 29,
					}}>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "center",
							background: "#FFFFFF",
							paddingTop: 16,
							paddingBottom: 16,
							paddingLeft: 10,
							paddingRight: 10,
						}}>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginRight: 312,
							}} >
							{"What is plagiarism?"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								marginRight: 301,
							}} >
							{"Using others' work without credit"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/qfpu3env_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								marginRight: 19,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/e4sjvinb_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								objectFit: "fill",
							}}
						/>
					</div>
				</div>
				<span 
					style={{
						color: "#000000",
						fontSize: 20,
						fontWeight: "bold",
						marginBottom: 29,
						width: 281,
					}} >
					{"Critical Thinking (1 questions)"}
				</span>
				<div 
					style={{
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
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
								marginRight: 396,
							}} >
							{"Question"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginTop: 1,
								marginBottom: 1,
								marginRight: 441,
							}} >
							{"Correct Answer"}
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
						alignSelf: "stretch",
						border: `1px solid #6D6D6D40`,
						paddingBottom: 2,
					}}>
					<div 
						style={{
							alignSelf: "stretch",
							display: "flex",
							alignItems: "center",
							background: "#FFFFFF",
							paddingTop: 16,
							paddingBottom: 16,
							paddingLeft: 10,
							paddingRight: 10,
						}}>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
								marginRight: 271,
							}} >
							{"What is critical thinking?"}
						</span>
						<span 
							style={{
								color: "#000000",
								fontSize: 17,
								marginRight: 301,
							}} >
							{"Analyzing information objectively"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/kkith5op_expires_30_days.png"} 
							style={{
								width: 29,
								height: 27,
								marginRight: 19,
								objectFit: "fill",
							}}
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7JUoFWZxxc/q6ht73ct_expires_30_days.png"} 
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
	</div>
</div>

        </>
    );
};


export default AdminQuestions;
