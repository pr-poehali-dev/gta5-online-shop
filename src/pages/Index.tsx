import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [onlinePlayers, setOnlinePlayers] = useState(3405);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnlinePlayers(prev => prev + Math.floor(Math.random() * 10 - 5));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const shopItems = [
    {
      id: 1,
      name: '100 000 Виртов',
      price: '99 ₽',
      description: 'Игровая валюта для покупок на сервере',
      icon: 'Coins',
      badge: 'Популярное'
    },
    {
      id: 2,
      name: '1 000 000 Виртов',
      price: '449 ₽',
      description: 'Выгодное предложение для активных игроков',
      icon: 'Wallet',
      badge: 'Выгодно'
    },
    {
      id: 3,
      name: 'VIP Bronze',
      price: '199 ₽',
      description: 'Базовый VIP статус на 30 дней',
      icon: 'Award',
      badge: null
    },
    {
      id: 4,
      name: 'VIP Silver',
      price: '399 ₽',
      description: 'Расширенные привилегии на 30 дней',
      icon: 'Star',
      badge: 'Популярное'
    },
    {
      id: 5,
      name: 'VIP Gold',
      price: '699 ₽',
      description: 'Максимум возможностей на 30 дней',
      icon: 'Crown',
      badge: 'Premium'
    },
    {
      id: 6,
      name: 'Starter Pack',
      price: '299 ₽',
      description: '300 000 виртов + VIP Bronze + бонусы',
      icon: 'Package',
      badge: 'Хит'
    }
  ];

  const features = [
    {
      icon: 'Users',
      title: 'Активное комьюнити',
      description: 'Тысячи игроков онлайн каждый день'
    },
    {
      icon: 'Shield',
      title: 'Защита от читеров',
      description: 'Строгая модерация и античит система'
    },
    {
      icon: 'Zap',
      title: 'Стабильные сервера',
      description: 'Без лагов и вылетов 24/7'
    },
    {
      icon: 'Sparkles',
      title: 'Уникальные фракции',
      description: 'Более 20 фракций и организаций'
    }
  ];

  const news = [
    {
      id: 1,
      title: 'Обновление 2.5: Новые фракции',
      date: '25 октября 2025',
      image: 'https://cdn.poehali.dev/files/4146969c-4366-4512-86a4-713736e3d4e9.png'
    },
    {
      id: 2,
      title: 'Акция: Скидка 30% на VIP',
      date: '20 октября 2025',
      image: 'https://cdn.poehali.dev/files/4146969c-4366-4512-86a4-713736e3d4e9.png'
    },
    {
      id: 3,
      title: 'Турнир по гонкам: Призы 100к',
      date: '15 октября 2025',
      image: 'https://cdn.poehali.dev/files/4146969c-4366-4512-86a4-713736e3d4e9.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      <nav className="fixed top-0 w-full z-50 bg-[#0F172A]/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-heading font-bold text-primary animate-glow">ROUSE RP</h1>
              <div className="hidden md:flex gap-6">
                <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">Авто</a>
                <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Фракции</a>
                <a href="#shop" className="text-foreground/80 hover:text-primary transition-colors">Геймплей</a>
                <a href="#news" className="text-foreground/80 hover:text-primary transition-colors">Галерея</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                <Icon name="Users" size={20} />
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading animate-pulse-glow">
                Начать играть
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-7xl md:text-8xl font-heading font-bold">
              <span className="text-primary animate-glow italic">ИГРАЙ В</span>
              <br />
              <span className="text-white">GTA 5</span>
              <br />
              <span className="text-secondary italic">ПРО РОССИЮ</span>
            </h1>
            <div className="flex items-center justify-center gap-3 text-lg">
              <div className="h-px w-16 bg-primary"></div>
              <p className="text-foreground/90 font-heading uppercase tracking-wider">Начни свой путь к успеху</p>
              <div className="h-px w-16 bg-primary"></div>
            </div>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading text-lg px-12 py-6 animate-pulse-glow border-2 border-primary">
              Начать играть
            </Button>
            <div className="flex items-center justify-center gap-2 text-foreground/70">
              <span className="uppercase tracking-wide">Онлайн:</span>
              <span className="text-primary font-bold text-2xl animate-glow">{onlinePlayers}</span>
              <span className="uppercase tracking-wide">человек</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            <span className="text-primary">О</span> <span className="text-foreground">сервере</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-heading text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-4">
            <span className="text-primary">Магазин</span> <span className="text-foreground">виртуальных товаров</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Приобретай виртуальную валюту и VIP статусы</p>
          
          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-card/50">
              <TabsTrigger value="all" className="font-heading">Все товары</TabsTrigger>
              <TabsTrigger value="currency" className="font-heading">Вирты</TabsTrigger>
              <TabsTrigger value="vip" className="font-heading">VIP статусы</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {shopItems.map(item => (
                  <Card key={item.id} className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:scale-105 relative overflow-hidden">
                    {item.badge && (
                      <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                        {item.badge}
                      </Badge>
                    )}
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <Icon name={item.icon} className="text-primary" size={32} />
                      </div>
                      <CardTitle className="font-heading text-foreground">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex items-center justify-between">
                      <span className="text-3xl font-heading font-bold text-primary">{item.price}</span>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Купить
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="currency">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {shopItems.filter(item => item.icon === 'Coins' || item.icon === 'Wallet' || item.icon === 'Package').map(item => (
                  <Card key={item.id} className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:scale-105 relative overflow-hidden">
                    {item.badge && (
                      <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                        {item.badge}
                      </Badge>
                    )}
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <Icon name={item.icon} className="text-primary" size={32} />
                      </div>
                      <CardTitle className="font-heading text-foreground">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex items-center justify-between">
                      <span className="text-3xl font-heading font-bold text-primary">{item.price}</span>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Купить
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vip">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {shopItems.filter(item => item.icon === 'Award' || item.icon === 'Star' || item.icon === 'Crown').map(item => (
                  <Card key={item.id} className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:scale-105 relative overflow-hidden">
                    {item.badge && (
                      <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                        {item.badge}
                      </Badge>
                    )}
                    <CardHeader>
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        <Icon name={item.icon} className="text-primary" size={32} />
                      </div>
                      <CardTitle className="font-heading text-foreground">{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex items-center justify-between">
                      <span className="text-3xl font-heading font-bold text-primary">{item.price}</span>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Купить
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="news" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-16">
            <span className="text-primary">Новости</span> <span className="text-foreground">и события</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {news.map(item => (
              <Card key={item.id} className="bg-card border-primary/20 hover:border-primary/50 transition-all hover:scale-105 overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-foreground">{item.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    {item.date}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="text-primary hover:text-primary/80">
                    Читать далее <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            <span className="text-primary">Готов</span> <span className="text-foreground">начать игру?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">Присоединяйся к тысячам игроков уже сейчас!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading text-lg px-12 py-6 animate-pulse-glow">
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-heading text-lg px-12 py-6">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Форум
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-[#0F172A] border-t border-primary/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-primary text-xl mb-4">ROUSE RP</h3>
              <p className="text-muted-foreground">Лучший русскоязычный GTA 5 RP сервер</p>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Навигация</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">О сервере</a></li>
                <li><a href="#shop" className="hover:text-primary transition-colors">Магазин</a></li>
                <li><a href="#news" className="hover:text-primary transition-colors">Новости</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Поддержка</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-foreground hover:text-primary">
                  <Icon name="Users" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-primary/20 text-center text-muted-foreground">
            <p>© 2025 ROUSE RP. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;