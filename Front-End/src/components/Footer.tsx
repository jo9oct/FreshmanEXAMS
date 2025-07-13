
import React from "react";

const Footer: React.FC = () => {
    return (
        <>
            <footer className="text-white" style={{ backgroundColor: "#170F2F" }}>
                <div className="container py-5">
                    <div className="row gy-5">

                        <div className="col-12 col-md-5 d-flex flex-column gap-3">
                            <div className="d-flex align-items-center gap-3">
                            <img src="/public/exam.png" alt="Logo" width={55} height={55} />
                            <h4 className="mb-0">Freshman <span style={{ color: "#179227" }}>EXAM</span></h4>
                            </div>
                            <p>
                            Empowering Ethiopian university freshman students with comprehensive exam preparation
                            resources and practice quizzes.
                            </p>
                            <img src="/public/images__1_-removebg-preview.png" alt="Ethiopia" width={84} height={65} />
                        </div>

                        <div className="col-12 col-md-7 d-flex flex-wrap justify-content-around gap-4">
                            <div>
                            <p className="fw-bold">Quick Links</p>
                            <p>All Courses</p>
                            <p>Study Tips</p>
                            <p>About Us</p>
                            <p>Contact</p>
                            </div>
                            <div>
                            <p className="fw-bold">Legal</p>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

            <div className="my-3 pt-3 border-top border-light ">
            <p className="text-center mb-0">
                © 2024 FreshmanExam.com. All rights reserved. Made with ❤️ for Ethiopian students.
            </p>
            </div>
            
        </>
    );
};


export default Footer;
