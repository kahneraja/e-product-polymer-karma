describe("e-product element", function() {
  var $el;
  before(function(done) {

    var div = document.createElement('div');
    var tag = '<e-product name="another great product" price="33.564"></e-product>';
    div.innerHTML = tag;
    document.body.appendChild(div);
    $el = document.querySelector('e-product');

    done();

  });

  it('amount should be 100.33', function() {
    var price = $el.shadowRoot.getElementById('price').innerHTML;
    expect(price).to.equal("$33.564");
  });

  it('name should be "another great product"', function() {
    var price = $el.shadowRoot.getElementById('name').innerHTML;
    expect(price).to.equal("another great product");
  });
});
