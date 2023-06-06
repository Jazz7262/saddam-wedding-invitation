import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
    return (
        <section id="invite-note">
            <div className="from">
                <h5>An Invitation from:</h5>
                <h2>Mrs. & Mr. Al-Haaj B. Vali Ahmed Sahab</h2>

                {/* <h5 className="address mb-3">Retd. Teacher and Pesh Imam</h5> */}
                <h5 className="address mb-3">
                    H.No.: 24/74, Beside Syed Shah Vali Dargah,
                    <br /> Adoni, Kurnool Dist.,
                    <br /> AP - 518 301.
                </h5>
                <p className="address">
                    Contact: <br />
                    +91 90307 38593, <br />
                    +91 944034 4804.
                </p>
            </div>
        </section>
    );
}

export default InviteNote;
