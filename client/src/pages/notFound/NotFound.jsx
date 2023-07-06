import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/projects');
  }, [navigate]);

  return (
    <div>Такой страницы не существует. Вы будете перенаправленны на главную страницу</div>
  )
}

export default NotFound