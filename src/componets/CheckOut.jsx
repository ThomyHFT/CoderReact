import React, { useContext, useState, useEffect } from 'react';
import '../styles/checkout.css';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../services/FireBaseConecction';
import Loader from './Loader.jsx';

const Checkout = ({ seccion }) => {
  const { cart, totalCart, clearCart } = useContext(CartContext);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false); // corregido

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const [idOrder, setIdOrder] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (seccion) {
      const sectionElement = document.querySelector(seccion);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [seccion]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const purchase = (e) => {
    e.preventDefault();
    setLoading(true);

    const orderData = {
      buyer: formData,
      resumen: {
        products: cart.map((prod) => ({
          name: prod.name,
          quantity: prod.quantity,
        })),
        total: totalCart(),
        date: serverTimestamp(),
      },
    };

    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, orderData)
      .then((res) => {
        setIdOrder(res.id);
        setSuccess(true);
        setPurchasedItems(cart);
        setTotal(totalCart());
        clearCart();
        setLoading(false); // oculta loader al finalizar
      })
      .catch((err) => {
        console.error('Error al finalizar compra:', err);
        alert('Ocurrió un error al procesar tu compra. Intenta nuevamente.');
        setLoading(false); // también si falla
      });
  };

  return (
    <div className="checkout-container">
      {loading ? (
        <Loader seccion={"postVenta"} />
      ) : (
        <>
          <h1>{success ? '¡Gracias por tu compra!' : 'Finalizar Compra'}</h1>

          {success ? (
            <div className="checkout-success-container">
              <div className="success-card">
                <h1>¡Gracias por tu compra, {formData.name}! 🎉</h1>
                <p>Tu pedido fue realizado con éxito.</p>

                <div className="order-info">
                  <p><strong>ID de la orden:</strong> {idOrder}</p>
                  <p><strong>Correo de contacto:</strong> {formData.email}</p>
                  <p><strong>Dirección:</strong> {formData.address}, {formData.city}</p>
                  <p><strong>Teléfono:</strong> {formData.phone}</p>
                  <p><strong>Código postal:</strong> {formData.postalCode}</p>
                </div>

                <div className="order-summary">
                  <h2>Resumen de tu compra</h2>
                  <ul className="summary-list">
                    {purchasedItems.map(item => (
                      <li key={item.id} className="summary-item">
                        <span>{item.name} x {item.quantity}</span>
                        <span>${(item.price * item.quantity).toLocaleString('es-CL')}</span>
                      </li>
                    ))}
                  </ul>
                  <hr />
                  <p className="summary-total"><strong>Total:</strong> ${total.toLocaleString('es-CL')}</p>
                </div>

                <a href="/" className="btn-home">Volver al inicio</a>
              </div>
            </div>
          ) : (
            <div className="checkout-content">
              <form onSubmit={purchase} className="checkout-form">
                <label>
                  Nombre completo
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                  />
                </label>

                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ejemplo@correo.com"
                  />
                </label>

                <label>
                  Teléfono
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+56 9 1234 5678"
                  />
                </label>

                <label>
                  Dirección
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="Calle, número, departamento"
                  />
                </label>

                <label>
                  Ciudad
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    placeholder="Ciudad"
                  />
                </label>

                <label>
                  Código postal
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                    placeholder="Código postal"
                  />
                </label>

                <button type="submit" className="checkout-submit-btn">
                  Confirmar compra
                </button>
              </form>

              <div className="checkout-summary">
                <h2>Resumen de la compra</h2>
                {cart.length === 0 ? (
                  <p>No hay productos en el carrito.</p>
                ) : (
                  <ul className="summary-list">
                    {cart.map((item) => (
                      <li key={item.id} className="summary-item">
                        <div className="summary-item-row">
                          <span>
                            {item.name} x {item.quantity}
                          </span>
                          <span>${(item.price * item.quantity).toLocaleString('es-CL')}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                <hr />
                <p className="summary-total">Total: ${totalCart().toLocaleString('es-CL')}</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Checkout;
