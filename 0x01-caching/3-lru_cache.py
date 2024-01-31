#!/usr/bin/env python3
"""LRU cache module"""


from collections import OrderedDict
from base_caching import BaseCaching


class LRUCache(BaseCaching):
    """LRU caching class"""
    def __init__(self):
        """initialises fifo cache instance"""
        super().__init__()
        self.order = OrderedDict()

    def put(self, key, item):
        """Assigns item value to key in cache_data dictionary"""
        if key is not None and item is not None:
            if key in self.cache_data:
                del self.order[key]
            self.order[key] = None
            if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                lru = next(iter(self.order))
                print(f"DISCARD: {lru}")
                del self.cache_data[lru_key]
                del self.order[lru_key]
            self.cache_data[key] = item

    def get(self, key):
        """Returns value in dict linked to key"""
        if key is not None and key in self.cache_data:
            del self.order[key]
            self.order[key] = None
            return self.cache_data[key]
        return None
