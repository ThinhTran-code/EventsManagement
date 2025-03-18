import React from "react";

function Contact() {
    return (
        <div style={{ padding: "50px", backgroundColor: "#fff7ea" }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "20px",
                }}
            >
                <div
                    style={{
                        backgroundColor: "#fff7ea",
                        padding: "20px",
                        textAlign: "left",
                        borderRadius: "5px",
                        width: "20%",
                        margin: "0 10px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {" "}
                    {/* Thêm boxShadow */}
                    <h3>Address</h3>
                    <p>Đại Học FPT Hòa Lạc, Thạch Thất, Hà Nội</p>
                </div>
                <div
                    style={{
                        backgroundColor: "#fff7ea",
                        padding: "20px",
                        textAlign: "left",
                        borderRadius: "5px",
                        width: "20%",
                        margin: "0 10px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {" "}
                    {/* Thêm boxShadow */}
                    <h3>Call Me</h3>
                    <p>Phone: +84 911 541 898</p>
                </div>
                <div
                    style={{
                        backgroundColor: "#fff7ea",
                        padding: "20px",
                        textAlign: "left",
                        borderRadius: "5px",
                        width: "20%",
                        margin: "0 10px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {" "}
                    {/* Thêm boxShadow */}
                    <h3>Mail</h3>
                    <p>thinhkesat@gmail.com</p>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div
                    style={{
                        width: "40%",
                        backgroundColor: "#fff7ea",
                        padding: "20px",
                        borderRadius: "5px",
                        marginRight: "20px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {" "}
                    {/* Thêm boxShadow */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3598.7647162067574!2d105.5248127800459!3d21.01294066911933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1742295986118!5m2!1svi!2s"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div
                    style={{
                        width: "40%",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    {" "}
                    {/* Thêm boxShadow */}
                    <h2 style={{ textAlign: "left", marginBottom: "20px" }}>
                        CONTACT
                    </h2>
                    <form>
                        <input
                            type="text"
                            placeholder="CODE WITH ZEESHU"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginBottom: "10px",
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                            }}
                        />
                        <input
                            type="email"
                            placeholder="zk@g"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginBottom: "10px",
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginBottom: "10px",
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                            }}
                        />
                        <textarea
                            placeholder="Message"
                            style={{
                                width: "100%",
                                padding: "10px",
                                marginBottom: "10px",
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                                height: "150px",
                            }}
                        ></textarea>
                        <button
                            type="submit"
                            style={{
                                backgroundColor: "#007bff",
                                color: "#fff",
                                padding: "10px 20px",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
