import React from 'react';
import { 
  Heart, 
  Eye, 
  Hand, 
  MessageCircle, 
  Flame, 
  User, 
  Ear, 
  Frown, 
  Users, 
  Clock, 
  Smartphone, 
  UserMinus,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface TopicIconProps {
  iconName: string;
  className?: string;
}

export function TopicIcon({ iconName, className = 'w-6 h-6' }: TopicIconProps) {
  switch (iconName) {
    case 'heart':
      return <Heart className={className} />;
    case 'eye':
      return <Eye className={className} />;
    case 'hand':
      return <Hand className={className} />;
    case 'message-circle':
      return <MessageCircle className={className} />;
    case 'flame':
      return <Flame className={className} />;
    case 'user':
      return <User className={className} />;
    case 'ear':
      return <Ear className={className} />;
    case 'frown':
      return <Frown className={className} />;
    case 'users':
      return <Users className={className} />;
    case 'clock':
      return <Clock className={className} />;
    case 'smartphone':
      return <Smartphone className={className} />;
    case 'user-minus':
      return <UserMinus className={className} />;
    default:
      return <BookOpen className={className} />;
  }
}
