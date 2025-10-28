import jsPDF from 'jspdf';
import 'jspdf-autotable';

const generateInvoicePDF = (invoiceData) => {
    const doc = new jsPDF();
    
    // Company Details
    const companyName = 'RISHABH JEWELLERS';
    const companyAddress = 'Shop No. 123, Jewellery Market, Mumbai - 400001';
    const companyGSTIN = '27AAAAA0000A1Z5';
    const companyContact = '+91 98765 43210';
    const companyEmail = 'info@rishabhjewellers.com';
    
    // Bank Details
    const bankName = 'State Bank of India';
    const accountNo = '1234567890';
    const ifscCode = 'SBIN0001234';
    const branch = 'Mumbai Main Branch';
    
    // Set font
    doc.setFont('helvetica');
    
    // Header - Company Name
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(190, 24, 93); // Deep pink
    doc.text(companyName, 105, 20, { align: 'center' });
    
    // Company Details
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    doc.text(companyAddress, 105, 27, { align: 'center' });
    doc.text(`GSTIN: ${companyGSTIN} | Contact: ${companyContact}`, 105, 32, { align: 'center' });
    doc.text(`Email: ${companyEmail}`, 105, 37, { align: 'center' });
    
    // Line separator
    doc.setDrawColor(190, 24, 93);
    doc.setLineWidth(0.5);
    doc.line(15, 40, 195, 40);
    
    // Invoice Title
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('TAX INVOICE', 105, 48, { align: 'center' });
    
    // Invoice Details
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`Invoice No: ${invoiceData.invoice_no}`, 15, 58);
    doc.text(`Date: ${new Date(invoiceData.invoice_date).toLocaleDateString('en-IN')}`, 150, 58);
    
    // Customer Details Box
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.rect(15, 63, 180, 25);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Bill To:', 17, 69);
    doc.setFont('helvetica', 'normal');
    doc.text(invoiceData.customer_name || '', 17, 75);
    
    // Split address into multiple lines if too long
    const addressLines = doc.splitTextToSize(invoiceData.address || '', 85);
    doc.text(addressLines, 17, 80);
    
    if (invoiceData.gstin) {
        doc.text(`GSTIN: ${invoiceData.gstin}`, 120, 69);
    }
    if (invoiceData.contact) {
        doc.text(`Contact: ${invoiceData.contact}`, 120, 75);
    }
    
    // Items Table
    const tableStartY = 95;
    
    const tableColumn = ['S.No', 'Description', 'HSN Code', 'Weight (g)', 'Rate/g (₹)', 'Amount (₹)'];
    const tableRows = [];
    
    invoiceData.items.forEach((item, index) => {
        const itemData = [
            index + 1,
            item.description,
            item.hsn_code || '-',
            parseFloat(item.weight).toFixed(3),
            parseFloat(item.rate_per_gram).toFixed(2),
            parseFloat(item.amount).toFixed(2)
        ];
        tableRows.push(itemData);
    });
    
    doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: tableStartY,
        theme: 'grid',
        headStyles: {
            fillColor: [190, 24, 93],
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            fontSize: 9
        },
        bodyStyles: {
            fontSize: 9
        },
        columnStyles: {
            0: { cellWidth: 15, halign: 'center' },
            1: { cellWidth: 60 },
            2: { cellWidth: 25, halign: 'center' },
            3: { cellWidth: 25, halign: 'right' },
            4: { cellWidth: 30, halign: 'right' },
            5: { cellWidth: 30, halign: 'right' }
        },
        margin: { left: 15, right: 15 }
    });
    
    // Get final Y position after table
    let finalY = doc.lastAutoTable.finalY + 10;
    
    // Totals Section
    const totalsX = 130;
    doc.setFontSize(10);
    
    doc.setFont('helvetica', 'normal');
    doc.text('Subtotal:', totalsX, finalY);
    doc.text(`₹ ${parseFloat(invoiceData.total_amount).toFixed(2)}`, 185, finalY, { align: 'right' });
    
    finalY += 6;
    doc.text('CGST (1.5%):', totalsX, finalY);
    doc.text(`₹ ${parseFloat(invoiceData.cgst).toFixed(2)}`, 185, finalY, { align: 'right' });
    
    finalY += 6;
    doc.text('SGST (1.5%):', totalsX, finalY);
    doc.text(`₹ ${parseFloat(invoiceData.sgst).toFixed(2)}`, 185, finalY, { align: 'right' });
    
    finalY += 6;
    doc.text('Total Tax:', totalsX, finalY);
    doc.text(`₹ ${parseFloat(invoiceData.total_tax).toFixed(2)}`, 185, finalY, { align: 'right' });
    
    // Grand Total with background
    finalY += 8;
    doc.setFillColor(190, 24, 93);
    doc.rect(totalsX - 2, finalY - 5, 60, 8, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text('Grand Total:', totalsX, finalY);
    doc.text(`₹ ${parseFloat(invoiceData.grand_total).toFixed(2)}`, 185, finalY, { align: 'right' });
    
    // Reset text color
    doc.setTextColor(0, 0, 0);
    
    // Bank Details
    finalY += 15;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('Bank Details:', 15, finalY);
    
    doc.setFont('helvetica', 'normal');
    finalY += 5;
    doc.text(`Bank Name: ${bankName}`, 15, finalY);
    finalY += 4;
    doc.text(`Account No: ${accountNo}`, 15, finalY);
    finalY += 4;
    doc.text(`IFSC Code: ${ifscCode}`, 15, finalY);
    finalY += 4;
    doc.text(`Branch: ${branch}`, 15, finalY);
    
    // Terms and Conditions
    finalY += 10;
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.text('Terms & Conditions:', 15, finalY);
    finalY += 4;
    doc.text('1. Goods once sold will not be taken back or exchanged.', 15, finalY);
    finalY += 3;
    doc.text('2. All disputes are subject to Mumbai jurisdiction only.', 15, finalY);
    
    // Signature
    doc.setFont('helvetica', 'normal');
    doc.text('For Rishabh Jewellers', 150, finalY + 15);
    doc.line(150, finalY + 20, 190, finalY + 20);
    doc.text('Authorized Signatory', 150, finalY + 25);
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(128, 128, 128);
    doc.text('Thank you for your business!', 105, 285, { align: 'center' });
    
    return doc;
};

export const downloadInvoicePDF = (invoiceData) => {
    const doc = generateInvoicePDF(invoiceData);
    doc.save(`Invoice_${invoiceData.invoice_no}.pdf`);
};

export const printInvoicePDF = (invoiceData) => {
    const doc = generateInvoicePDF(invoiceData);
    doc.autoPrint();
    window.open(doc.output('bloburl'), '_blank');
};

export default { downloadInvoicePDF, printInvoicePDF };
