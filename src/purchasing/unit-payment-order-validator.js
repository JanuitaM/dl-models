require("should");
var validateSupplier = require('../master/supplier-validator');
var validateUnit = require('../master/unit-validator');

var validateUnitPaymentOrderItem = require('./unit-payment-order-item-validator');
 
module.exports = function (data) {
    data.should.have.property('no');
    data.no.should.instanceOf(String);
    
    data.should.have.property('unitId');
    data.unitId.should.instanceof(Object);

    data.should.have.property('unit');
    data.unit.should.instanceof(Object);
    validateUnit(data.unit);

    data.should.have.property('date');
    data.date.should.instanceOf(Date);

    data.should.have.property('supplierId');
    data.supplierId.should.instanceof(Object);

    data.should.have.property('supplier');
    data.supplier.should.instanceof(Object);
    validateSupplier(data.supplier);
    
    data.should.have.property('invoceNo');
    data.invoceNo.should.instanceOf(String);

    data.should.have.property('invoceDate');
    data.invoceDate.should.instanceOf(Date);

    data.should.have.property('incomeTaxCorrectionNo');
    data.incomeTaxCorrectionNo.should.instanceOf(String);

    data.should.have.property('incomeTaxCorrectionDate');
    data.incomeTaxCorrectionDate.should.instanceOf(Date);

    data.should.have.property('vatCorrectionNo');
    data.vatCorrectionNo.should.instanceOf(String);

    data.should.have.property('vatCorrectionDate');
    data.vatCorrectionDate.should.instanceOf(Date);

    data.should.have.property('vatRate');
    data.vatRate.should.instanceOf(Number);

    data.should.have.property('remark');
    data.remark.should.instanceOf(String);

    data.should.have.property('items');
    data.items.should.instanceOf(Array);
    for (var item of data.items) {
        validateUnitPaymentOrderItem(item);
    }
}