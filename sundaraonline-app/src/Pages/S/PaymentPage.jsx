import styles from "./Payment.module.css";
import { GoChevronRight } from "react-icons/go";
import React from "react";
import { BiCheckbox } from "react-icons/bi";
import { GoChevronDown } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { useState } from "react";
import { Link } from "react-router-dom";
const PaymentPage = () => {
  const [states, setStates] = useState("");
  const [title, setTitle] = useState("");
  const [datainput, setDatainput] =useState("");
  const [addreinput, setAddress] = useState("");
console.log(datainput)
  return (
    <>
      <div style={{marginBottom:"300px"}} className={styles.PaymentInfo}>
        <div className={styles.PaymentInfofirst}>
          <div className={styles.firstLhead}>
            <p>SUNDARA</p>
          </div>

          <div className={styles.InfoSecondHead}>
            <div>
              <Link to={'/cart'}>
              <p>Cart</p>
              </Link>
            <GoChevronRight   />
            </div>
            <div>
              <Link to={'/cart/information'}>
              <p>Information</p>
              </Link>
            <GoChevronRight   />
            </div>
            <div>
              <Link to={'/cart/information/shipping'}>
              <p>Shipping</p>
              </Link>
            <GoChevronRight  />
            </div>
            <div>
            <Link to={'/cart/information/shipping/payment'}>
              <p>Payment</p>
            </Link>
            <GoChevronRight  />
            </div>
          </div>
          <br />

          <div className={styles.ContInfocontainer}>
            {/* <div className={styles.firstInfoContainer}> */}
            <div className={styles.btnss1}>
              <img
                src={
                  "https://cdn.shopify.com/s/files/1/0065/7650/4896/articles/Screen_Shot_2021-07-14_at_11.26.52_AM_540x.png?v=1626287226"
                }
              />
            </div>
            <div className={styles.btnss2}>
              <img
                src={
                  "https://newsroom.paypal-corp.com/image/Library_PayPal.png"
                }
              />
            </div>
            <div className={styles.btnss3}>
              <img
                src={
                  "https://d2csxpduxe849s.cloudfront.net/media/F44207E3-1DDE-4798-B0FCC94F6227FCB7/5178B7EE-CB0A-4958-8639A1B0028E2F56/webimage-10B13DE9-ABD9-4318-B33EF188C9F552F5.jpg"
                }
              />
            </div>
            {/* </div> */}
          </div>

          <div className={styles.MainInfoContaier}>
            <div className={styles.ContactMainInfo}>
              <div className={styles.ciF}>
                <p>Contact information</p>
              </div>
              <div className={styles.Maindiv}>
                Already have an account? Log in
              </div>
            </div>
            <div className={styles.inputFis}>
              <input onChange={(e)=> {setDatainput(e.target.value)
               localStorage.setItem("emaildata",e.target.value)
      }}
                type="text"
                email="email"
                placeholder="Email or mobile phone number"
              />
            </div>

            <div  className={styles.Emaildiv}>
              <input style={{width:"20px"}} type="checkbox"/>
              <p>Email me with news and offers</p>
            </div>
          </div>

          <div  className={styles.ShippingAddrContain}>
            <div className={styles.ShippingAdddiv}>
              <div>
                <p>Shipping address</p>
              </div>
              <select style={{width:"675px"}}
                className={styles.Selectedstasf}
                onChange={(e) => {
                  setTitle(setTitle);
                }}
              >
                <option>Country or region</option>
                <option>United state</option>
              </select>
              {title}
            </div>
            <br />

            <div className={styles.InputNames}>
              <input type="text" name="name" placeholder="First name" />
              <input type="text" name="name" placeholder="Last name" />
            </div>
            <br />
            <div className={styles.InputOne}>
              <input
                type="text"
                name="name"
                placeholder="Company (optional) "
              />
            </div>
            <br />

            <div className={styles.InputOne}>
              <input type="text" placeholder="Address" onChange={(e)=>{ setAddress(e.target.value)
               localStorage.setItem("addressdata",e.target.value)
              }} />
            </div>
            <br />

            <div className={styles.InputOne}>
              <input
                type="text"
                placeholder="Apartment, suite, etc (optional)"
              />
            </div>
            <br />

            <div className={styles.FirstInp}>
              <input type="text" placeholder="City" />
              <select
                className={styles.Selectedstas}
                onChange={(e) => {
                  setStates(setStates);
                }}
              >
                <option>States</option>
                <option>Hawaii</option>
                <option>Alakasa</option>
                <option>South</option>
                <option value="north">North</option>
                <option value="indiana">Indiana</option>
                <option value="flworada">Flworada</option>
              </select>
              {states}
              <input type="text" name="number" placeholder="ZIP code" />
            </div>
            <div style={{width:"640px"}} >
              <input  style={{width:"100%"}}  type="number" placeholder=" phone (907) 488-6419" />
            </div>
            <br />
          </div>

          <br />
          <br />

          <br />
          <div  className={styles.ContinuePayButt}>
            <div className={styles.ReturnTocartf}>
              <GoChevronLeft
                style={{
                  marginLeft: "1%",
                  fontSize: "21px",
                  marginTop: "6%",
                }}
              />
              <Link to={'/cart'}>

              <p>Return to Information</p>
              </Link>
            </div>
            <div className={styles.ContinueBtnPay}>
              <Link to='/cart/information/shipping'>
              <button>Continue to payment</button>
              </Link>
            </div>
          </div>
        </div>

          {/* second box */}


        <div className={styles.PaymentInfoSecond}>
          <div className={styles.SecondContainerT}>
            <div className={styles.ImageContainer}>
              <div>
                <img src="https://media.istockphoto.com/photos/alluring-woman-dressed-in-a-posh-jewelry-set-of-necklace-ring-and-picture-id1180931397?k=20&m=1180931397&s=612x612&w=0&h=f-0SQWW3Wxc8zh4HMLB2p_R4mYhLzHX3-aGrghKuRu4=" />
              </div>

              <div>
                <p>fern Bengal</p>
              </div>
            </div>
            <div className={styles.PriceContain}>
              <p> $68</p>
            </div>
          </div>

          <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <input
              style={{ height: "35px", 
              marginLeft: "33px",
               width: "45%" }}
              type="text"
              name="name"
              placeholder="Gift card or discount code"
            />

            <input
              style={{
                height: "35px",
                border: "none",
                borderRadius: "5%",
                marginLeft: "8px",
                marginBottom:"45px",
                width: "15%",
                backgroundColor: "#BABBC5",
                fontSize: "16px",
                color: "white ",
              }}
              type="submit"
              value="Apply"
            />
          </div>
          <br></br>
          <div className={styles.ContainerLt}>
            <hr></hr>
            <div className={styles.ContainerTypes}>
              <div>
                <p>Subtotal</p>
              </div>
              <div className={styles.ContainerT2}>
                <p>$70</p>
              </div>
            </div>

            <div className={styles.ContainerTypes}>
              <div>
                <p>Shipping</p>
              </div>
              <div className={styles.ContainerT2}>
                <p>$70</p>
              </div>
            </div>
            <hr></hr>
            <div className={styles.ContainerTypes}>
              <div>
                <p>Total</p>
              </div>
              <div className={styles.ContainerT3}>
                <p>$140</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
