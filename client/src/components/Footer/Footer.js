import React from "react";
import "./footer.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer Starts Here --> */}
      <div className="footer">
        <TableContainer
          component={Paper}
          sx={{ backgroundColor: "transparent" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>
                  <h2>About Us</h2>
                </TableCell>
                <TableCell align="left">
                  <h2> Hosting Plans</h2>
                </TableCell>
                <TableCell align="left">
                  <h2>Useful Links</h2>
                </TableCell>
                <TableCell align="left">
                  <h2>More Information</h2>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left" sx={{ width: "30%" }}>
                  <p>
                    {" "}
                    Host Cloud is provided by TemplateMo for free of charge.
                    Anyone can download and use this CSS Bootstrap template for
                    commercial purposes.
                  </p>
                </TableCell>

                <TableCell align="left">
                  <ul className="footer-list">
                    <li>
                      <a href="/">Basic Cloud 5X</a>
                    </li>
                    <li>
                      <a href="/">Cloud VPS 10X</a>
                    </li>
                    <li>
                      <a href="/">Advanced Cloud</a>
                    </li>
                    <li>
                      <a href="/">Custom Designs</a>
                    </li>
                    <li>
                      <a href="/">Special Solutions</a>
                    </li>
                  </ul>
                </TableCell>
                <TableCell align="left">
                  <ul className="footer-list">
                    <li>
                      <a href="/">Cloud Hosting Platform</a>
                    </li>
                    <li>
                      <a href="/">Light Speed Zone</a>
                    </li>
                    <li>
                      <a href="/">Content Delivery Network</a>
                    </li>
                    <li>
                      <a href="/">Customer Support</a>
                    </li>
                    <li>
                      <a href="/">Latest News</a>
                    </li>
                  </ul>
                </TableCell>
                <TableCell align="left">
                  <ul className="footer-list">
                    <li>
                      Phone: <a href="/">010-020-0560</a>
                    </li>
                    <li>
                      Email: <a href="/">mail@company.com</a>
                    </li>
                    <li>
                      Support: <a href="/">support@company.com</a>
                    </li>
                    <li>
                      Website: <a href="/">www.company.com</a>
                    </li>
                  </ul>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div className="sub-footer">
          <p style={{ textAlign: "center" }}>
            Copyright &copy; 2020 Cloud Influencers Company - Designed by
          </p>
        </div>
      </div>
      {/* <!-- Footer Ends Here --> */}
    </div>
  );
};

export default Footer;
