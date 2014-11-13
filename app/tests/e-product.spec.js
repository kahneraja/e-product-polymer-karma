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

  it('should be 100.33', function() {
    var price = $el.shadowRoot.getElementById('price').innerHTML;
    expect(price).to.equal("$33.564");
  });
});
