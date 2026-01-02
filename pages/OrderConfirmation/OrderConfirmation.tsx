/**
 * Order Confirmation Page
 *
 * Displays order confirmation with invoice generation and PDF download.
 */

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Download, Mail, Package, ArrowLeft } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { OrderData } from "types";
import { SafeImage } from "components/ui";
import { formatDate, generateTransactionId } from "lib/utils";
import { COMPANY_INFO } from "config/constants";

interface OrderConfirmationProps {
  orderData: OrderData;
  onBackToHome: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({
  orderData,
  onBackToHome,
}) => {
  const generatePDF = async () => {
    const element = document.getElementById("invoice");
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`Invoice-${orderData.orderId}.pdf`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/60 to-blue-100/40 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Message */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <CheckCircle className="h-10 w-10 text-green-600" />
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h1>
          <p className="text-lg text-gray-600">
            Thank you for your purchase. Your order has been successfully
            placed.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={generatePDF}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="h-5 w-5" />
            Download Invoice PDF
          </motion.button>
          <motion.button
            onClick={onBackToHome}
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 flex items-center justify-center gap-2 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </motion.button>
        </motion.div>

        {/* Invoice */}
        <motion.div
          id="invoice"
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Invoice Header */}
          <div className="border-b border-gray-200 pb-6 mb-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {COMPANY_INFO.name}
                </h2>
                <p className="text-gray-600">{COMPANY_INFO.address}</p>
                <p className="text-gray-600">
                  {COMPANY_INFO.city}, {COMPANY_INFO.state}{" "}
                  {COMPANY_INFO.zipCode}
                </p>
                <p className="text-gray-600">Phone: {COMPANY_INFO.phone}</p>
              </div>
              <div className="text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  INVOICE
                </h3>
                <p className="text-gray-600">Order ID: {orderData.orderId}</p>
                <p className="text-gray-600">
                  Date: {formatDate(orderData.orderDate)}
                </p>
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Bill To:</h4>
              <div className="text-gray-600">
                <p>
                  {orderData.customerInfo.firstName}{" "}
                  {orderData.customerInfo.lastName}
                </p>
                <p>{orderData.customerInfo.address}</p>
                <p>
                  {orderData.customerInfo.city}, {orderData.customerInfo.state}{" "}
                  {orderData.customerInfo.zipCode}
                </p>
                <p>{orderData.customerInfo.country}</p>
                <p>Email: {orderData.customerInfo.email}</p>
                <p>Phone: {orderData.customerInfo.phone}</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Ship To:</h4>
              <div className="text-gray-600">
                <p>
                  {orderData.customerInfo.firstName}{" "}
                  {orderData.customerInfo.lastName}
                </p>
                <p>{orderData.customerInfo.address}</p>
                <p>
                  {orderData.customerInfo.city}, {orderData.customerInfo.state}{" "}
                  {orderData.customerInfo.zipCode}
                </p>
                <p>{orderData.customerInfo.country}</p>
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="mb-8">
            <h4 className="font-semibold text-gray-900 mb-4">Order Details:</h4>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
                      Product
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                      Quantity
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-right font-semibold">
                      Unit Price
                    </th>
                    <th className="border border-gray-300 px-4 py-3 text-right font-semibold">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {orderData.isCartOrder ? (
                    orderData.items?.map((item) => (
                      <tr key={item.id}>
                        <td className="border border-gray-300 px-4 py-3">
                          <div className="flex items-center space-x-3">
                            <SafeImage
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded"
                            />
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-600">Product</p>
                            </div>
                          </div>
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          {item.quantity}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-right">
                          ${item.price}
                        </td>
                        <td className="border border-gray-300 px-4 py-3 text-right font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td className="border border-gray-300 px-4 py-3">
                        <div className="flex items-center space-x-3">
                          <SafeImage
                            src={orderData.product!.image}
                            alt={orderData.product!.name}
                            className="w-12 h-12 object-cover rounded"
                          />
                          <div>
                            <p className="font-medium">
                              {orderData.product!.name}
                            </p>
                            <p className="text-sm text-gray-600">
                              {orderData.product!.category}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-center">
                        {orderData.quantity!}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right">
                        ${orderData.product!.price}
                      </td>
                      <td className="border border-gray-300 px-4 py-3 text-right font-semibold">
                        $
                        {(
                          orderData.product!.price * orderData.quantity!
                        ).toFixed(2)}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Order Summary */}
          <div className="flex justify-end">
            <div className="w-full max-w-sm">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">
                    $
                    {orderData.isCartOrder
                      ? orderData.subtotal?.toFixed(2)
                      : (
                          orderData.product!.price * orderData.quantity!
                        ).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (8%):</span>
                  <span className="font-medium">${orderData.tax}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium">
                    {orderData.shipping === 0
                      ? "Free"
                      : `$${orderData.shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-lg font-semibold">
                      ${orderData.grandTotal}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">
              Payment Information:
            </h4>
            <div className="text-gray-600">
              <p>
                Payment Method: Credit Card ending in ****
                {orderData.customerInfo.cardNumber.slice(-4)}
              </p>
              <p>Cardholder: {orderData.customerInfo.cardName}</p>
              <p>Transaction ID: {generateTransactionId()}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-600">
            <p className="mb-2">Thank you for shopping with ShopNext!</p>
            <p className="text-sm">
              For questions about your order, contact us at {COMPANY_INFO.email}{" "}
              or {COMPANY_INFO.phone}
            </p>
          </div>
        </motion.div>

        {/* Order Status */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            What's Next?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">
                  Order Confirmation
                </h4>
                <p className="text-sm text-gray-600">
                  Email sent to {orderData.customerInfo.email}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                <Package className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Processing</h4>
                <p className="text-sm text-gray-600">Order being prepared</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Delivery</h4>
                <p className="text-sm text-gray-600">3-5 business days</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
